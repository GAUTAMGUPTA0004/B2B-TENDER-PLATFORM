import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function CreateCompany() {
  const [form, setForm] = useState({
    name: '',
    industry: '',
    description: '',
    logoFile: null,
  });
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('logo', file);
    
    const response = await axios.post('http://localhost:5000/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    return response.data.url; // Assuming your backend returns { url: 'path/to/image' }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Please login first');
        router.push('/login');
        return;
      }

      let logoUrl = '';
      
      // Upload image if provided
      if (form.logoFile) {
        try {
          logoUrl = await uploadImage(form.logoFile);
        } catch (uploadError) {
          console.error('Image upload failed:', uploadError);
          alert('Image upload failed, but company will be created without logo');
        }
      }

      const body = {
        name: form.name,
        industry: form.industry,
        description: form.description,
        logoUrl: logoUrl,
      };

      await axios.post('http://localhost:5000/api/company', body, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert('Company created successfully!');
      router.push('/dashboard');
    } catch (err) {
      console.error(err);
      alert('Creation failed');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Company</h2>
        
        <input
          placeholder="Company Name"
          value={form.name}
          required
          className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        
        <input
          placeholder="Industry"
          value={form.industry}
          required
          className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={e => setForm({ ...form, industry: e.target.value })}
        />
        
        <textarea
          placeholder="Company Description"
          value={form.description}
          required
          rows={4}
          className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={e => setForm({ ...form, description: e.target.value })}
        />
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company Logo
          </label>
          <input
            type="file"
            accept="image/*"
            className="border p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setForm({ ...form, logoFile: e.target.files?.[0] || null })
            }
          />
          {form.logoFile && (
            <p className="text-sm text-gray-600 mt-1">
              Selected: {form.logoFile.name}
            </p>
          )}
        </div>
        
        <button 
          type="submit" 
          disabled={uploading}
          className="bg-blue-600 text-white py-3 px-6 w-full rounded hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {uploading ? 'Creating...' : 'Create Company'}
        </button>
      </form>
    </div>
  );
}

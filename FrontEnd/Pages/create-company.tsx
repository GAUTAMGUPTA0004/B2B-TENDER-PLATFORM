import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function CreateCompany() {
  const [form, setForm] = useState<{
    name: string;
    industry: string;
    description: string;
    logoFile: File | null;
  }>({
    name: '',
    industry: '',
    description: '',
    logoFile: null,
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Please login first');
        router.push('/login');
        return;
      }

      
      const body = {
        name: form.name,
        industry: form.industry,
        description: form.description,
        logoUrl: '', 
      };

      await axios.post('http://localhost:5000/api/company', body, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert('Company created successfully!');
      router.push('/dashboard');
    } catch (err) {
      console.error(err);
      alert('Creation failed');
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
        
        <input
          type="file"
          accept="image/*"
          className="border p-3 w-full mb-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setForm({ ...form, logoFile: e.target.files?.[0] || null })
          }
        />
        
        <button 
          type="submit" 
          className="bg-blue-600 text-white py-3 px-6 w-full rounded hover:bg-blue-700 transition-colors"
        >
          Create Company
        </button>
      </form>
    </div>
  );
}
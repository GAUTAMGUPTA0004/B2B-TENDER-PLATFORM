import { useState } from 'react';
import axios from 'axios';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');

      
      let logoUrl = '';
      if (form.logoFile) {
        const logoData = new FormData();
        logoData.append('file', form.logoFile);

        const uploadRes = await axios.post(
  `${process.env.SUPABASE_URL}/storage/v1/object/public/${process.env.SUPABASE_BUCKET}`,
  logoData,
  {
    headers: {
      apikey: process.env.SUPABASE_API_KEY as string,
      Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
      'Content-Type': 'multipart/form-data',
    },
  }
);
    

        logoUrl = uploadRes.data?.Key || ''; 
      }

      const body = {
        name: form.name,
        industry: form.industry,
        description: form.description,
        logoUrl,
      };

      await axios.post('/api/company', body, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert('Company created');
    } catch (err) {
      console.error(err);
      alert('Creation failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <h2 className="text-xl mb-4">Create Company</h2>
      <input
        placeholder="Name"
        className="border p-2 w-full mb-2"
        onChange={e => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Industry"
        className="border p-2 w-full mb-2"
        onChange={e => setForm({ ...form, industry: e.target.value })}
      />
      <textarea
        placeholder="Description"
        className="border p-2 w-full mb-2"
        onChange={e => setForm({ ...form, description: e.target.value })}
      />
      <input
        type="file"
        className="border p-2 w-full mb-2"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setForm({ ...form, logoFile: e.target.files?.[0] || null })
        }
      />
      <button type="submit" className="bg-blue-600 text-white py-2 px-4">
        Submit
      </button>
    </form>
  );
}
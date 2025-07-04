import { useState } from 'react';
import axios from 'axios';

export default function CreateTender() {
  const [form, setForm] = useState({ title: '', description: '', deadline: '', budget: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/tender', form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Tender created');
    } catch (err) {
      alert('Creation failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <h2 className="text-xl mb-4">Create Tender</h2>
      <input placeholder="Title" className="border p-2 w-full mb-2" onChange={e => setForm({ ...form, title: e.target.value })} />
      <textarea placeholder="Description" className="border p-2 w-full mb-2" onChange={e => setForm({ ...form, description: e.target.value })} />
      <input type="date" className="border p-2 w-full mb-2" onChange={e => setForm({ ...form, deadline: e.target.value })} />
      <input type="number" placeholder="Budget" className="border p-2 w-full mb-2" onChange={e => setForm({ ...form, budget: e.target.value })} />
      <button type="submit" className="bg-green-600 text-white py-2 px-4">Submit</button>
    </form>
  );
}

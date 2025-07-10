import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Company {
  id: string;
  name: string;
  industry: string;
}

export default function CreateTender() {
  const [form, setForm] = useState({ 
    title: '', 
    description: '', 
    deadline: '', 
    budget: '',
    companyId: ''
  });
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Fetch user's companies
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    axios.get('http://localhost:5000/api/company', {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(res => {
      setCompanies(res.data);
      // Auto-select first company if only one exists
      if (res.data.length === 1) {
        setForm(prev => ({ ...prev, companyId: res.data[0].id }));
      }
    })
    .catch(err => {
      console.error('Failed to load companies:', err);
      alert('Failed to load companies');
    });
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.companyId) {
      alert('Please select a company');
      return;
    }
    
    setLoading(true);
    
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Please login first');
        router.push('/login');
        return;
      }

      const tenderData = {
        title: form.title,
        description: form.description,
        deadline: form.deadline,
        budget: parseFloat(form.budget),
        companyId: form.companyId
      };

      await axios.post('http://localhost:5000/api/tender', tenderData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      alert('Tender created successfully!');
      router.push('/tenders');
    } catch (err) {
      console.error('Creation failed:', err);
      alert('Creation failed');
    } finally {
      setLoading(false);
    }
  };

  if (companies.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow text-center">
          <h2 className="text-2xl font-bold mb-4">Create Company First</h2>
          <p className="text-gray-600 mb-6">
            You need to create a company before posting tenders.
          </p>
          <button
            onClick={() => router.push('/create-company')}
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Create Company
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Tender</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Company
          </label>
          <select
            value={form.companyId}
            onChange={e => setForm({ ...form, companyId: e.target.value })}
            className="border p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Choose a company...</option>
            {companies.map(company => (
              <option key={company.id} value={company.id}>
                {company.name} ({company.industry})
              </option>
            ))}
          </select>
        </div>
        
        <input
          placeholder="Tender Title"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
          className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        
        <textarea
          placeholder="Tender Description"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
          className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          required
        />
        
        <input
          type="date"
          value={form.deadline}
          onChange={e => setForm({ ...form, deadline: e.target.value })}
          className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        
        <input
          type="number"
          placeholder="Budget (₹)"
          value={form.budget}
          onChange={e => setForm({ ...form, budget: e.target.value })}
          className="border p-3 w-full mb-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          min="0"
          step="0.01"
          required
        />
        
        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white py-3 px-6 w-full rounded hover:bg-green-700 transition-colors disabled:opacity-50"
        >
          {loading ? 'Creating...' : 'Create Tender'}
        </button>
      </form>
    </div>
  );
}

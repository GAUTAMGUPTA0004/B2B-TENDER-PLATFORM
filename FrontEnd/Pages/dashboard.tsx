import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import CompanyCard from '../Components/CompanyCard';

interface Company {
  id: string;
  name: string;
  industry: string;
  description: string;
  logoUrl?: string;
}

export default function Dashboard() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
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
      setLoading(false);
    })
    .catch(err => {
      console.error('Failed to load companies:', err);
      alert('Failed to load companies');
      setLoading(false);
    });
  }, [router]);

  if (loading) {
    return (
      <div className="p-8 text-center">
        <div className="text-lg">Loading companies...</div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button
          onClick={() => router.push('/create-company')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create New Company
        </button>
      </div>
      
      {companies.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600 mb-4">No companies found</p>
          <button
            onClick={() => router.push('/create-company')}
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Create Your First Company
          </button>
        </div>
      ) : (
        <div className="grid gap-4">
          {companies.map((company) => (
            <CompanyCard
              key={company.id}
              name={company.name}
              industry={company.industry}
              description={company.description}
              logoUrl={company.logoUrl}
            />
          ))}
        </div>
      )}
    </div>
  );
}
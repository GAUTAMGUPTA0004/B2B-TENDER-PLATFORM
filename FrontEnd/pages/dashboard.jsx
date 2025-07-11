import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import CompanyCard from '../components/CompanyCard';

export default function Dashboard() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window === 'undefined') return;
    
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    const fetchCompanies = async () => {
      try {
        const res = await axios.get('https://b2b-tender-platform-yngf.onrender.com/api/company', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCompanies(res.data);
      } catch (err) {
        console.error('Failed to load companies:', err);
        setError('Failed to load companies');
        // If unauthorized, redirect to login
        if (err.response?.status === 401) {
          localStorage.removeItem('token');
          router.push('/login');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, [router]);

  if (loading) {
    return (
      <div className="p-8 text-center">
        <div className="text-lg">Loading companies...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center">
        <div className="text-red-600">{error}</div>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Retry
        </button>
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
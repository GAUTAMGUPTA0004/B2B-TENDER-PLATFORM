import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Layout from '../Components/Layout';

export default function Dashboard() {
  const [companies, setCompanies] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) router.push('/login');
    axios.get('/api/company', {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(res => setCompanies(res.data))
    .catch(() => alert('Failed to load companies'));
  }, []);

  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-2xl mb-4">Dashboard</h1>
        <ul>
          {companies.map((c: any) => (
            <li key={c.id} className="border p-2 mb-2">{c.name} - {c.industry}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
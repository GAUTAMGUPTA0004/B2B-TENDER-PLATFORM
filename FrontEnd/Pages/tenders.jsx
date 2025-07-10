import { useEffect, useState } from 'react';
import axios from 'axios';
import TenderCard from '../Components/TenderCard';

export default function Tenders() {
  const [tenders, setTenders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch tenders with company information
    axios.get('http://localhost:5000/api/tender?includeCompany=true')
      .then(res => {
        setTenders(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load tenders:', err);
        alert('Failed to load tenders');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="p-8 text-center">
        <div className="text-lg">Loading tenders...</div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Available Tenders</h1>
        <button
          onClick={() => window.location.href = '/create-tender'}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Post New Tender
        </button>
      </div>
      
      {tenders.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600 mb-4">No tenders available</p>
          <button
            onClick={() => window.location.href = '/create-tender'}
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
          >
            Post the First Tender
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {tenders.map((tender) => (
            <TenderCard
              key={tender.id}
              title={tender.title}
              description={tender.description}
              deadline={tender.deadline}
              budget={tender.budget}
              companyName={tender.company?.name}
              companyLogo={tender.company?.logoUrl}
              companyIndustry={tender.company?.industry}
            />
          ))}
        </div>
      )}
    </div>
  );
}
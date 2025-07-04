import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Tenders() {
  const [tenders, setTenders] = useState([]);

  useEffect(() => {
    axios.get('/api/tender')
      .then(res => setTenders(res.data))
      .catch(() => alert('Failed to load tenders'));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Tenders</h1>
      <ul>
        {tenders.map((t: any) => (
          <li key={t.id} className="border p-2 mb-2">{t.title} - ₹{t.budget}</li>
        ))}
      </ul>
    </div>
  );
}
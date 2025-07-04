import { useState } from 'react';
import axios from 'axios';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await axios.get(`/api/search?q=${query}`);
      setResults(res.data);
    } catch (err) {
      alert('Search failed');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Search Companies</h1>
      <input type="text" value={query} onChange={e => setQuery(e.target.value)} className="border p-2 w-full mb-2" />
      <button onClick={handleSearch} className="bg-blue-600 text-white py-2 px-4 mb-4">Search</button>
      <ul>
        {results.map((r: any) => (
          <li key={r.id} className="border p-2 mb-2">{r.name} - {r.industry}</li>
        ))}
      </ul>
    </div>
  );
}

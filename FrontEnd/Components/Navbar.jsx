import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">TenderHub</h1>
      <div className="space-x-4">
        <Link href="/dashboard" className="text-gray-700 hover:underline">Dashboard</Link>
        <Link href="/tenders" className="text-gray-700 hover:underline">Tenders</Link>
        <Link href="/search" className="text-gray-700 hover:underline">Search</Link>
        <Link href="/create-company" className="text-gray-700 hover:underline">Create Company</Link>
        <Link href="/create-tender" className="text-gray-700 hover:underline">Create Tender</Link>
      </div>
    </nav>
  );
}
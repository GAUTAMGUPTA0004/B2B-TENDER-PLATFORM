import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to TenderHub 🚀</h1>
      <p className="text-lg mb-8 text-gray-700 text-center">
        Manage company profiles, post tenders, and apply to opportunities.
      </p>
      <div className="space-x-4">
        <Link href="/login">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Login</button>
        </Link>
        <Link href="/register">
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Register</button>
        </Link>
      </div>
    </main>
  );
}
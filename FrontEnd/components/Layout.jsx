import Navbar from './Navbar';

export default function Layout({ children, showNavbar = true }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {showNavbar && <Navbar />}
      <main>
        {children}
      </main>
    </div>
  );
}

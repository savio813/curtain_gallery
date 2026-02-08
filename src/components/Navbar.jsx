import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-2xl font-bold text-[var(--primary)]">
          Curtain Gallery
        </h1>

        <nav className="flex gap-8 font-medium">
          <Link to="/" className="hover:text-[var(--accent)]">Home</Link>
          <Link to="/products" className="hover:text-[var(--accent)]">Products</Link>
          <Link to="/contact" className="hover:text-[var(--accent)]">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

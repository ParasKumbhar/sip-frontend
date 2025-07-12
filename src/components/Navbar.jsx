import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/logo.svg" alt="SIP Pro Logo" className="w-10 h-10 drop-shadow-lg transition-transform group-hover:scale-110" />
          <span className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-400 via-white to-green-400 bg-clip-text text-transparent font-montserrat drop-shadow group-hover:scale-105 transition-transform" style={{ fontFamily: 'Montserrat, Inter, sans-serif' }}>
            SIP <span className="font-black">Pro</span>
          </span>
        </Link>
        <div className="space-x-4 font-medium">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
          <Link to="/plans" className="hover:text-yellow-300">Plans</Link>
          <Link to="/calculator" className="hover:text-yellow-300">Calculator</Link>
          <Link to="/blog" className="hover:text-yellow-300">Blog</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

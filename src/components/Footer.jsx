import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-6 mt-10">
      <p>© {new Date().getFullYear()} SIP Pro — Smart Investment Platform. All rights reserved.</p>
    </footer>
  );
}

import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-100 py-16 px-4 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-10 animate-fade-in-up">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-12 w-full max-w-5xl animate-fade-in-up delay-200">
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6">
          <label className="font-semibold text-blue-900">Name
            <input type="text" name="name" value={form.name} onChange={handleChange} required className="mt-2 p-3 rounded bg-gray-100 w-full focus:outline-none focus:ring-2 focus:ring-blue-900" />
          </label>
          <label className="font-semibold text-blue-900">Email
            <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-2 p-3 rounded bg-gray-100 w-full focus:outline-none focus:ring-2 focus:ring-blue-900" />
          </label>
          <label className="font-semibold text-blue-900">Message
            <textarea name="message" value={form.message} onChange={handleChange} required rows={4} className="mt-2 p-3 rounded bg-gray-100 w-full focus:outline-none focus:ring-2 focus:ring-blue-900" />
          </label>
          <button type="submit" className="bg-yellow-400 text-blue-900 font-bold py-3 rounded-full shadow hover:bg-yellow-500 transition-all duration-300">Send Message</button>
          {submitted && <div className="text-green-700 font-semibold mt-2 animate-fade-in-up">Thank you! We'll get back to you soon.</div>}
        </form>
        <div className="flex flex-col gap-8 justify-center items-center">
          <iframe title="SIP Office Location" src="https://www.openstreetmap.org/export/embed.html?bbox=73.3387%2C18.9632%2C73.3387%2C18.9632&amp;layer=mapnik" className="w-full h-64 rounded-xl shadow" allowFullScreen loading="lazy"></iframe>
          <div className="flex gap-6 mt-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-blue-900 text-white p-3 rounded-full shadow hover:scale-110 transition-all duration-300">
              <svg width="24" height="24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37c-.83.5-1.75.87-2.72 1.07A4.28 4.28 0 0 0 16.11 4c-2.36 0-4.28 1.92-4.28 4.29 0 .34.04.67.1.99C7.69 9.13 4.07 7.2 1.64 4.16c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.83 1.92 3.61-.71-.02-1.38-.22-1.97-.54v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54c-.38 0-.75-.02-1.12-.07A12.13 12.13 0 0 0 7.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-blue-900 text-white p-3 rounded-full shadow hover:scale-110 transition-all duration-300">
              <svg width="24" height="24" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.07-.93-2-2-2s-2 .93-2 2v4.5h-3v-9h3v1.22c.59-.86 1.68-1.22 2.5-1.22 1.93 0 3.5 1.57 3.5 3.5v5.5z"/></svg>
            </a>
            <a href="mailto:info@sippro.com" className="bg-yellow-400 text-blue-900 p-3 rounded-full shadow hover:scale-110 transition-all duration-300">
              <svg width="24" height="24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm-16 12V8.99l8 6.99 8-6.99V18H4z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(.23,1,.32,1) both;
        }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </section>
  );
}

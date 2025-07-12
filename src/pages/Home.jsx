import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-900 via-green-700 to-yellow-400 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <img src="/logo.svg" alt="SIP Logo" className="mx-auto mt-16 animate-bounce w-32 h-32" />
        </div>
        <div className="z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg animate-fade-in-up mb-6">
            Invest in Your Future
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-8 animate-fade-in-up delay-200">
            Systematic Investment Plans for Growth, Trust, and Progress
          </p>
          <Link to="/plans" className="inline-block px-8 py-4 rounded-full bg-yellow-400 text-blue-900 font-bold text-lg shadow-lg hover:bg-yellow-500 transition-all duration-300 animate-fade-in-up delay-400">
            Explore SIP Plans
          </Link>
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
          .delay-400 { animation-delay: 0.4s; }
        `}</style>
      </section>

      <section className="mt-16 grid md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
        <div className="bg-white shadow-xl p-6 rounded-lg hover:scale-105 transform transition">
          <h2 className="text-xl font-bold text-blue-600 mb-2">Start with ₹500</h2>
          <p className="text-gray-600">Flexible investments with high returns and low risk for all levels.</p>
        </div>
        <div className="bg-white shadow-xl p-6 rounded-lg hover:scale-105 transform transition">
          <h2 className="text-xl font-bold text-blue-600 mb-2">Secure & SEBI Compliant</h2>
          <p className="text-gray-600">100% compliant with SEBI and AMFI regulations with bank-grade security.</p>
        </div>
        <div className="bg-white shadow-xl p-6 rounded-lg hover:scale-105 transform transition">
          <h2 className="text-xl font-bold text-blue-600 mb-2">Expert Insights</h2>
          <p className="text-gray-600">Get access to curated plans and expert blogs to make informed decisions.</p>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="mt-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Why Choose SIP Pro?</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-green-50 rounded-xl p-6 shadow text-center">
            <span className="text-4xl">💡</span>
            <h3 className="font-bold text-lg mt-2 mb-1">Personalized Recommendations</h3>
            <p className="text-gray-600">AI-powered suggestions tailored to your goals.</p>
          </div>
          <div className="bg-yellow-50 rounded-xl p-6 shadow text-center">
            <span className="text-4xl">📈</span>
            <h3 className="font-bold text-lg mt-2 mb-1">Transparent Growth</h3>
            <p className="text-gray-600">Track your investments with real-time analytics.</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 shadow text-center">
            <span className="text-4xl">🤝</span>
            <h3 className="font-bold text-lg mt-2 mb-1">Trusted Partners</h3>
            <p className="text-gray-600">Work with SEBI-registered, top-rated fund houses.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 shadow text-center">
            <span className="text-4xl">⚡</span>
            <h3 className="font-bold text-lg mt-2 mb-1">Fast Onboarding</h3>
            <p className="text-gray-600">Complete KYC and start investing in minutes.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col">
            <p className="text-gray-700 italic mb-4">“SIP Pro made investing so easy and transparent. I love the real-time tracking and expert support!”</p>
                 <div className="flex items-center gap-3">
                   <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&w=80&h=80&fit=facearea&facepad=2" alt="Rahul Deshmukh" className="w-12 h-12 rounded-full object-cover" />
              <span className="font-bold text-blue-900">Rahul Deshmukh</span>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col">
            <p className="text-gray-700 italic mb-4">“The SIP Calculator is fantastic! I planned my child’s education with confidence.”</p>
                 <div className="flex items-center gap-3">
                   <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=compress&w=80&h=80&fit=facearea&facepad=2" alt="Sneha Patil" className="w-12 h-12 rounded-full object-cover" />
              <span className="font-bold text-blue-900">Sneha Patil</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="mt-20 max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Stay Updated!</h2>
        <p className="text-gray-700 mb-6">Subscribe to our newsletter for the latest SIP tips, market news, and exclusive offers.</p>
        <form className="flex flex-col gap-4 items-center">
          <input type="email" placeholder="Your email address" required className="p-3 rounded w-full max-w-xs bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-900" />
          <button type="submit" className="bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-full shadow hover:bg-yellow-500 transition-all duration-300">Subscribe</button>
        </form>
      </section>
    </>
  );
}

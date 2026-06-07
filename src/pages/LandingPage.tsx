import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Bell, Send, CheckCircle } from 'lucide-react';
import { DEALS, HOST_CITIES } from '../data';
import { trackClick, buildPartnerUrl } from '../utils/affiliate';

const LandingPage: React.FC = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const handleViewFlights = (deal: typeof DEALS[0]) => {
    if (deal.partner) {
      const dummyUrls = {
        skyscannerId: 'https://www.skyscanner.net/transport/flights/search',
        expediaId: 'https://www.expedia.com/Flights-Search',
        kayakId: 'https://www.kayak.com/flights'
      };
      
      trackClick(deal.partner);
      const finalUrl = buildPartnerUrl(dummyUrls[deal.partner], deal.partner);
      window.open(finalUrl, '_blank');
    } else {
      navigate(`/search?to=${deal.to}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-700 text-white py-20 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 opacity-10">
          <svg width="500" height="500" viewBox="0 0 512 512" fill="white">
            <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 448c-110.28 0-200-89.72-200-200S145.72 56 256 56s200 89.72 200 200-89.72 200-200 200zm-44-284l132 132-28.28 28.28L183.72 200.28 128 256l-28.28-28.28L183.72 144l28.28 28z" />
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Score the Cheapest Flights to the <span className="text-yellow-400">2026 World Cup</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-blue-100">
            Don't get sidelined by high prices. We find the deals, you enjoy the game.
          </p>

          {/* Search Form */}
          <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 text-gray-800 max-w-3xl mx-auto">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Flying from (City or Airport)"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  required
                />
              </div>
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                <select
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none appearance-none bg-white transition"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  required
                >
                  <option value="" disabled>Select Host City</option>
                  {HOST_CITIES.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                  <option value="All US Cities">All US Cities</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-lg shadow-md transition transform hover:scale-105"
              >
                Find Deals
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Flash Deals Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Current Flash Deals</h2>
            <button className="text-blue-600 font-semibold hover:underline">View all deals</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DEALS.map((deal) => (
              <div key={deal.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition transform hover:-translate-y-2">
                <div className="relative h-48">
                  <img src={deal.image} alt={deal.to} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                    {deal.discount}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">To {deal.to}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-gray-500 line-through text-sm">Was $550</span>
                    <span className="text-3xl font-extrabold text-blue-600">${deal.price}</span>
                    <span className="text-gray-500 text-sm">Round trip</span>
                  </div>
                  <button 
                    onClick={() => handleViewFlights(deal)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition"
                  >
                    View Flights
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deal Alerts Signup */}
      <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Bell className="h-16 w-16 text-yellow-400 mx-auto mb-6 animate-bounce" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Never Miss a Price Drop</h2>
          <p className="text-xl text-blue-200 mb-10">
            Join 50,000+ fans getting instant alerts when flights to the World Cup drop below $400.
          </p>

          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:ring-4 focus:ring-yellow-400 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-lg shadow-lg transition flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Alert Me!
              </button>
            </form>
          ) : (
            <div className="bg-green-600 text-white p-6 rounded-xl flex items-center justify-center gap-4 animate-fade-in max-w-lg mx-auto">
              <CheckCircle className="h-8 w-8" />
              <div className="text-left">
                <h4 className="font-bold text-lg">You're on the list!</h4>
                <p>We'll notify you as soon as a deal pops up.</p>
              </div>
            </div>
          )}
          <p className="mt-6 text-sm text-blue-300 italic">
            * We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Featured Partnerships (Mock) */}
      <section className="py-12 bg-white px-4 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 font-semibold uppercase tracking-widest text-sm mb-8">Featured Booking Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition duration-500">
             <span className="text-2xl font-black text-gray-800">SkyCheck</span>
             <span className="text-2xl font-black text-gray-800">TripMaster</span>
             <span className="text-2xl font-black text-gray-800">FlyBuddy</span>
             <span className="text-2xl font-black text-gray-800">ExpediGo</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

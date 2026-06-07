import React from 'react';
import { Smartphone, Zap, Star, Check } from 'lucide-react';

const PremiumPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">GoalGetaway <span className="text-yellow-500">Premium</span></h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get the unfair advantage. Be the first to book flash deals before they sell out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {/* Free Tier */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 flex flex-col">
            <h2 className="text-2xl font-bold mb-2">Free Fan</h2>
            <p className="text-gray-500 mb-6">Basic alerts for everyone</p>
            <div className="text-4xl font-black mb-8">$0 <span className="text-lg font-normal text-gray-400">/ forever</span></div>
            
            <ul className="space-y-4 mb-12 flex-1">
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500" />
                <span>Daily email newsletter</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500" />
                <span>Basic flight search</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500" />
                <span>Web-only deals</span>
              </li>
            </ul>
            
            <button className="w-full border-2 border-blue-600 text-blue-600 font-bold py-3 rounded-xl hover:bg-blue-50 transition">
              Current Plan
            </button>
          </div>

          {/* Premium Tier */}
          <div className="bg-blue-600 rounded-2xl shadow-2xl p-8 text-white relative overflow-hidden flex flex-col transform md:scale-105">
            <div className="absolute top-0 right-0 bg-yellow-400 text-blue-900 px-6 py-1 transform rotate-45 translate-x-10 translate-y-4 font-bold text-sm">
              BEST VALUE
            </div>
            
            <h2 className="text-2xl font-bold mb-2">Pro Traveler</h2>
            <p className="text-blue-200 mb-6">Instant alerts to your phone</p>
            <div className="text-4xl font-black mb-8">$19 <span className="text-lg font-normal text-blue-200">/ one-time fee</span></div>
            
            <ul className="space-y-4 mb-12 flex-1">
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-yellow-400" />
                <span>Instant SMS / WhatsApp alerts</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-yellow-400" />
                <span>24-hour early access to flash sales</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-yellow-400" />
                <span>Multi-city alert routing</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-yellow-400" />
                <span>Hidden-city ticketing alerts</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-yellow-400" />
                <span>Priority support</span>
              </li>
            </ul>
            
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 rounded-xl shadow-lg transition transform hover:scale-105">
              Upgrade to Premium
            </button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
           <div>
              <Zap className="h-10 w-10 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Instant</h3>
              <p className="text-gray-500 text-sm">Receive alerts within seconds of a price drop.</p>
           </div>
           <div>
              <Smartphone className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Mobile-First</h3>
              <p className="text-gray-500 text-sm">No need to check your email constantly.</p>
           </div>
           <div>
              <Star className="h-10 w-10 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Exclusive</h3>
              <p className="text-gray-500 text-sm">Access deals not available to the general public.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumPage;

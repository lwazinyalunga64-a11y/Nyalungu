import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Smartphone, Zap, Star, Check, X, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { addSubscriber, validateEmail } from '../utils/subscribers';

const PremiumPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentCanceled, setPaymentCanceled] = useState(false);

  useEffect(() => {
    if (searchParams.get('success') === 'true') {
      setPaymentSuccess(true);
    }
    if (searchParams.get('canceled') === 'true') {
      setPaymentCanceled(true);
      setIsModalOpen(true); // Re-open modal if they canceled
    }
  }, [searchParams]);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!name) {
      setError('Please enter your name');
      setLoading(false);
      return;
    }

    if (!email) {
      setError('Please enter your email');
      setLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email');
      setLoading(false);
      return;
    }

    try {
      // First save them as a lead/subscriber
      addSubscriber(email, name, 'premium-waitlist');

      // Create PayFast Redirect Session
      const response = await fetch('/api/payfast-redirect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      });

      const data = await response.json();

      if (data.url) {
        // Redirect to PayFast
        window.location.href = data.url;
      } else {
        throw new Error(data.error || 'Failed to initiate PayFast checkout');
      }
    } catch (err: any) {
      console.error('Checkout error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
      setLoading(false);
    }
  };
  return (
    <div className="bg-gray-50 min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">GoalGetaway <span className="text-yellow-500">Premium</span></h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get the unfair advantage. Be the first to book flash deals before they sell out.
          </p>
          
          {paymentSuccess && (
            <div className="mt-8 bg-green-100 border-2 border-green-500 p-6 rounded-2xl max-w-2xl mx-auto animate-fade-in">
              <div className="flex items-center justify-center gap-4 text-green-700">
                <CheckCircle className="h-12 w-12" />
                <div className="text-left">
                  <h3 className="text-2xl font-bold">Welcome to Premium!</h3>
                  <p>Your payment was successful. Check your email for access details.</p>
                </div>
              </div>
            </div>
          )}

          {!paymentSuccess && (
            <div className="mt-6 inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              Premium is now live! Join the inner circle for just $19.
            </div>
          )}
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
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 rounded-xl shadow-lg transition transform hover:scale-105"
            >
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

      {/* Waitlist Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-fade-in">
            <div className="bg-blue-600 p-6 text-white relative">
              <button 
                onClick={() => {
                  setIsModalOpen(false);
                  setName('');
                  setEmail('');
                  setError('');
                }}
                className="absolute top-4 right-4 text-white hover:text-blue-200 transition"
              >
                <X className="h-6 w-6" />
              </button>
              <h3 className="text-2xl font-bold">Join the Waitlist</h3>
              <p className="text-blue-100">Premium is coming soon. Secure your spot.</p>
            </div>
            
            <div className="p-6">
              {paymentCanceled && (
                <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center gap-3 text-yellow-800">
                  <AlertCircle className="h-5 w-5" />
                  <p className="text-sm font-medium">Checkout was canceled. Ready when you are!</p>
                </div>
              )}

              <form onSubmit={handleCheckout} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={loading}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                  />
                </div>
                {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-3 rounded-lg shadow-lg transition flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Preparing Secure Checkout...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Continue to Secure Payment
                    </>
                  )}
                </button>
                <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col items-center gap-2">
                  <p className="text-xs text-gray-400 text-center">
                    Secure payment processed by PayFast.
                  </p>
                  <div className="flex items-center gap-1 opacity-50">
                    <span className="text-[10px] text-gray-400 font-mono">ID: 33483003...g2ju</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PremiumPage;

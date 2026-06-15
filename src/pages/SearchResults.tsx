import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Plane, ChevronRight, ExternalLink, Loader2 } from 'lucide-react';
import { trackClick, buildPartnerUrl } from '../utils/affiliate';

const SearchResults: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const fromParam = queryParams.get('from') || '';
  const toParam = queryParams.get('to') || '';
  
  // redirecting state removed - unused
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    // Track the click for statistics
    trackClick('skyscannerId');

    // Build the Skyscanner URL
    // Format: https://www.skyscanner.net/transport/flights/{from}/{to}/{date}?associateId={affiliate_id}
    const from = fromParam.toLowerCase().replace(/\s+/g, '-');
    const to = toParam === 'All US Cities' ? 'us' : toParam.toLowerCase().replace(/\s+/g, '-');
    const date = '260610'; // June 10, 2026 (approx start of World Cup)
    
    const baseUrl = `https://www.skyscanner.net/transport/flights/${from}/${to}/${date}/`;
    const finalUrl = buildPartnerUrl(baseUrl, 'skyscannerId');

    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = finalUrl;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [fromParam, toParam]);

  return (
    <div className="bg-gray-100 min-h-[calc(100-vh-64px)] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-6 relative">
          <div className="h-24 w-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Plane className="h-12 w-12 text-blue-600 animate-pulse" />
          </div>
          <div className="absolute top-0 right-1/4">
            <Loader2 className="h-8 w-8 text-yellow-500 animate-spin" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">Searching Real Flights...</h1>
        <p className="text-gray-600 mb-8">
          We're connecting to Skyscanner to find the best live deals from <strong>{fromParam || 'your location'}</strong> to <strong>{toParam}</strong> for the 2026 World Cup.
        </p>

        <div className="space-y-4">
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2 overflow-hidden">
            <div 
              className="bg-blue-600 h-full transition-all duration-1000 ease-linear"
              style={{ width: `${((3 - countdown) / 3) * 100}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 font-medium">
            Redirecting in {countdown} seconds...
          </p>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-400 mb-4 italic">
            You are being redirected to our official booking partner.
          </p>
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              // Build URL again for immediate redirect
              const from = fromParam.toLowerCase().replace(/\s+/g, '-');
              const to = toParam === 'All US Cities' ? 'us' : toParam.toLowerCase().replace(/\s+/g, '-');
              const date = '260610';
              const baseUrl = `https://www.skyscanner.net/transport/flights/${from}/${to}/${date}/`;
              window.location.href = buildPartnerUrl(baseUrl, 'skyscannerId');
            }}
            className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline"
          >
            Click here if not redirected <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8">
          <Link to="/" className="text-sm text-gray-500 hover:text-blue-600 flex items-center justify-center gap-1">
            <ChevronRight className="h-4 w-4 rotate-180" /> Back to search
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;

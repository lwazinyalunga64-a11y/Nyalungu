import React, { useState, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Plane, Shield, Filter, ChevronRight, ExternalLink } from 'lucide-react';
import { FLIGHTS } from '../data';
import { trackClick, buildPartnerUrl } from '../utils/affiliate';

const SearchResults: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const fromParam = queryParams.get('from') || '';
  const toParam = queryParams.get('to') || '';

  const [maxPrice, setMaxPrice] = useState(1000);
  const [sortOrder, setSortOrder] = useState<'price-asc' | 'duration-asc'>('price-asc');

  const filteredFlights = useMemo(() => {
    let results = FLIGHTS;
    
    if (toParam && toParam !== 'All US Cities') {
      results = results.filter(f => f.to.includes(toParam));
    }
    
    results = results.filter(f => f.price <= maxPrice);

    if (sortOrder === 'price-asc') {
      results.sort((a, b) => a.price - b.price);
    } else {
      // Very crude duration sort (e.g. "8h 15m" vs "11h 30m")
      results.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
    }

    return results;
  }, [toParam, maxPrice, sortOrder]);

  const handleBookNow = (partner: 'skyscannerId' | 'expediaId' | 'kayakId') => {
    const dummyUrls = {
      skyscannerId: 'https://www.skyscanner.net/transport/flights/search',
      expediaId: 'https://www.expedia.com/Flights-Search',
      kayakId: 'https://www.kayak.com/flights'
    };
    
    trackClick(partner);
    const finalUrl = buildPartnerUrl(dummyUrls[partner], partner);
    window.open(finalUrl, '_blank');
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Flights to {toParam || 'the US'}
            </h1>
            <p className="text-gray-600">
              {fromParam ? `From ${fromParam} • ` : ''}June 2026 • {filteredFlights.length} results
            </p>
          </div>
          <Link to="/" className="text-blue-600 font-semibold hover:underline flex items-center">
            Change Search <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-md h-fit">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b">
              <Filter className="h-5 w-5 text-blue-600" />
              <h2 className="font-bold text-lg">Filters</h2>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Max Price: <span className="text-blue-600">${maxPrice}</span>
              </label>
              <input
                type="range"
                min="100"
                max="2000"
                step="50"
                value={maxPrice}
                onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Sort By</label>
              <select 
                className="w-full border p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as any)}
              >
                <option value="price-asc">Price (Lowest)</option>
                <option value="duration-asc">Duration (Shortest)</option>
              </select>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div className="flex items-start gap-2">
                <Shield className="h-5 w-5 text-blue-600 mt-1" />
                <p className="text-xs text-blue-800">
                  <strong>Travel Protection:</strong> All listed flights include free rebooking if match dates change.
                </p>
              </div>
            </div>
          </div>

          {/* Results List */}
          <div className="lg:col-span-3 space-y-4">
            {filteredFlights.length > 0 ? (
              filteredFlights.map((flight) => (
                <div key={flight.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col md:flex-row">
                  <div className="p-6 flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gray-100 p-2 rounded-md">
                        <Plane className="h-6 w-6 text-gray-400 rotate-45" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">{flight.airline}</p>
                        <p className="text-sm text-gray-500">{flight.id === '1' ? 'Non-stop' : '1 Stop'}</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-center px-4">
                      <div className="text-left">
                        <p className="text-2xl font-bold">10:30</p>
                        <p className="text-gray-500 font-medium">{flight.from.split('(')[1].replace(')', '')}</p>
                      </div>
                      
                      <div className="flex flex-col items-center flex-1 px-8 relative">
                         <p className="text-xs text-gray-400 mb-1">{flight.duration}</p>
                         <div className="w-full h-[2px] bg-gray-200 relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                               <Plane className="h-4 w-4 text-blue-500" />
                            </div>
                         </div>
                         <p className="text-xs text-blue-600 mt-1">{flight.stops === 0 ? 'Direct' : `${flight.stops} Stop`}</p>
                      </div>

                      <div className="text-right">
                        <p className="text-2xl font-bold">18:45</p>
                        <p className="text-gray-500 font-medium">{flight.to.split('(')[1]?.replace(')', '') || flight.to}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 flex flex-col justify-center border-t md:border-t-0 md:border-l w-full md:w-48 text-center">
                    <p className="text-sm text-gray-500 mb-1">Total price</p>
                    <p className="text-3xl font-extrabold text-gray-900 mb-4">${flight.price}</p>
                    <button 
                      onClick={() => handleBookNow('skyscannerId')}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition mb-2"
                    >
                      Book Now <ExternalLink className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => handleBookNow('expediaId')}
                      className="text-[11px] text-blue-600 hover:underline font-medium"
                    >
                      View on Expedia
                    </button>
                    <p className="text-[10px] text-gray-400 mt-2 italic">via Partner Affiliate</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white p-12 rounded-xl shadow-md text-center">
                <h3 className="text-xl font-bold mb-2">No flights found matching your filters</h3>
                <p className="text-gray-600 mb-6">Try increasing your max price or checking a different host city.</p>
                <button 
                  onClick={() => setMaxPrice(2000)}
                  className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;

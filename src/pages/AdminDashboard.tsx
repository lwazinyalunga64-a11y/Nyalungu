
import React, { useState, useEffect } from 'react';
import { getAffiliateConfig, saveAffiliateConfig, getStats } from '../utils/affiliate';
import type { AffiliateConfig, Stats } from '../utils/affiliate';

const AdminDashboard: React.FC = () => {
  const [config, setConfig] = useState<AffiliateConfig>(getAffiliateConfig());
  const [stats, setStats] = useState<Stats>(getStats());
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    // Refresh stats periodically
    const interval = setInterval(() => {
      setStats(getStats());
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveAffiliateConfig(config);
    setSaveMessage('Config saved successfully!');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  const resetStats = () => {
    if (confirm('Are you sure you want to reset all earnings stats?')) {
      localStorage.removeItem('gg_affiliate_stats');
      setStats(getStats());
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-blue-900">Partner Admin Dashboard</h1>
        <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-3 rounded-lg flex items-center gap-3">
          <span className="text-sm font-medium uppercase tracking-wider">Money Pocket:</span>
          <span className="text-2xl font-bold">${stats.totalEarnings.toFixed(2)}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Earnings Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Simulated Earnings Overview</h2>
              <button 
                onClick={resetStats}
                className="text-sm text-red-600 hover:text-red-800 font-medium"
              >
                Reset Stats
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-sm text-blue-600 font-medium mb-1">Skyscanner</p>
                <p className="text-2xl font-bold text-blue-900">{stats.skyscannerClicks}</p>
                <p className="text-xs text-blue-500 mt-1">Clicks</p>
              </div>
              <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                <p className="text-sm text-indigo-600 font-medium mb-1">Expedia</p>
                <p className="text-2xl font-bold text-indigo-900">{stats.expediaClicks}</p>
                <p className="text-xs text-indigo-500 mt-1">Clicks</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                <p className="text-sm text-purple-600 font-medium mb-1">Kayak</p>
                <p className="text-2xl font-bold text-purple-900">{stats.kayakClicks}</p>
                <p className="text-xs text-purple-500 mt-1">Clicks</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-700">Recent Revenue Breakdown</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="pb-3 font-semibold text-gray-600">Partner</th>
                      <th className="pb-3 font-semibold text-gray-600">Rate/Click</th>
                      <th className="pb-3 font-semibold text-gray-600">Earnings</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-3 text-gray-800">Skyscanner</td>
                      <td className="py-3 text-gray-600">$1.50</td>
                      <td className="py-3 font-medium text-green-600">${(stats.skyscannerClicks * 1.5).toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-gray-800">Expedia</td>
                      <td className="py-3 text-gray-600">$1.20</td>
                      <td className="py-3 font-medium text-green-600">${(stats.expediaClicks * 1.2).toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-gray-800">Kayak</td>
                      <td className="py-3 text-gray-600">$1.10</td>
                      <td className="py-3 font-medium text-green-600">${(stats.kayakClicks * 1.1).toFixed(2)}</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="bg-gray-50 font-bold">
                      <td className="py-3 px-2 text-gray-800" colSpan={2}>Total Estimated Revenue</td>
                      <td className="py-3 text-blue-700">${stats.totalEarnings.toFixed(2)}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Config Section */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Affiliate Configuration</h2>
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Skyscanner Partner ID
                </label>
                <input
                  type="text"
                  value={config.skyscannerId}
                  onChange={(e) => setConfig({ ...config, skyscannerId: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Enter ID"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expedia Partner ID
                </label>
                <input
                  type="text"
                  value={config.expediaId}
                  onChange={(e) => setConfig({ ...config, expediaId: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Enter ID"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Kayak Partner ID
                </label>
                <input
                  type="text"
                  value={config.kayakId}
                  onChange={(e) => setConfig({ ...config, kayakId: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Enter ID"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-lg shadow-blue-200 mt-2"
              >
                Save Configuration
              </button>
              
              {saveMessage && (
                <p className="text-center text-green-600 font-medium text-sm mt-2 animate-bounce">
                  {saveMessage}
                </p>
              )}
            </form>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="text-yellow-800 font-bold flex items-center gap-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Quick Tip
            </h3>
            <p className="text-sm text-yellow-700">
              Affiliate IDs are automatically appended to all booking links across the site as soon as you save.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

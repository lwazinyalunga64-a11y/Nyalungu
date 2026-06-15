import React, { useState, useEffect } from 'react';
import { getSubscribers, downloadSubscribersCsv } from '../utils/subscribers';
import type { Subscriber } from '../types';
import { Mail, Download, Trash2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SubscribersPage: React.FC = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);

  useEffect(() => {
    setSubscribers(getSubscribers());
  }, []);

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to remove this subscriber?')) {
      const updated = subscribers.filter(s => s.id !== id);
      localStorage.setItem('goalgetaway_subscribers', JSON.stringify(updated));
      setSubscribers(updated);
    }
  };

  const clearAll = () => {
    if (confirm('Are you sure you want to clear ALL subscribers? This cannot be undone.')) {
      localStorage.removeItem('goalgetaway_subscribers');
      setSubscribers([]);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <Link to="/admin" className="p-2 hover:bg-gray-100 rounded-full transition text-gray-600">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-3xl font-bold text-blue-900">Email Subscribers</h1>
      </div>

      <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Deal Alert List</h2>
            <p className="text-gray-500">{subscribers.length} total fans subscribed</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={downloadSubscribersCsv}
              disabled={subscribers.length === 0}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded-lg transition"
            >
              <Download className="h-4 w-4" />
              Export CSV
            </button>
            <button
              onClick={clearAll}
              disabled={subscribers.length === 0}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white border border-red-200 text-red-600 hover:bg-red-50 disabled:text-gray-400 disabled:border-gray-100 font-bold py-2 px-4 rounded-lg transition"
            >
              <Trash2 className="h-4 w-4" />
              Clear All
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 font-semibold text-gray-600">Subscriber</th>
                <th className="px-6 py-4 font-semibold text-gray-600">Source</th>
                <th className="px-6 py-4 font-semibold text-gray-600">Date Joined</th>
                <th className="px-6 py-4 font-semibold text-gray-600 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {subscribers.length > 0 ? (
                subscribers.map((subscriber) => (
                  <tr key={subscriber.id} className="hover:bg-blue-50/30 transition">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                          <Mail className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">{subscriber.email}</div>
                          {subscriber.name && <div className="text-sm text-gray-500">{subscriber.name}</div>}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                        subscriber.source === 'premium-waitlist' 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {subscriber.source === 'premium-waitlist' ? 'Premium Waitlist' : 'Newsletter'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-sm">
                      {new Date(subscriber.subscribedAt).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleDelete(subscriber.id)}
                        className="text-gray-400 hover:text-red-600 transition p-2"
                        title="Remove subscriber"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-gray-400 italic">
                    No subscribers yet. Start marketing!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 border border-blue-100 p-6 rounded-xl">
        <h3 className="text-blue-800 font-bold mb-2 flex items-center gap-2">
          <Mail className="h-5 w-5" />
          Newsletter Tips
        </h3>
        <ul className="list-disc list-inside text-blue-700 space-y-1 text-sm">
          <li>Send alerts immediately when flights drop below $500 for maximum conversion.</li>
          <li>Segment your list by origin city if possible (captured during search).</li>
          <li>Export your list to CSV to use with Mailchimp or SendGrid.</li>
        </ul>
      </div>
    </div>
  );
};

export default SubscribersPage;

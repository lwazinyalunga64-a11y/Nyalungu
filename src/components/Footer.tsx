import React from 'react';
import { Mail, Globe, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-lg font-bold mb-4">GoalGetaway</h3>
            <p className="mb-4 max-w-md">
              Helping football fans score the best flight deals to the US for the 2026 World Cup. 
              Don't miss the biggest tournament in history because of expensive flights.
            </p>
            <div className="flex space-x-4">
              <Globe className="h-5 w-5 cursor-pointer hover:text-blue-400" />
              <Mail className="h-5 w-5 cursor-pointer hover:text-blue-600" />
              <Send className="h-5 w-5 cursor-pointer hover:text-pink-400" />
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Host Cities</h4>
            <ul className="space-y-2 text-sm">
              <li>New York / New Jersey</li>
              <li>Los Angeles</li>
              <li>Miami</li>
              <li>Dallas</li>
              <li>San Francisco</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>How It Works</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Contact</li>
              <li className="pt-2 border-t border-gray-800">
                <Link to="/admin" className="text-gray-500 hover:text-gray-400">Partner Admin</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} GoalGetaway. All rights reserved. Not affiliated with FIFA.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

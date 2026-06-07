import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Plane className="h-8 w-8 text-yellow-400" />
              <span className="font-bold text-xl tracking-tight">GoalGetaway</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/search" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Find Flights</Link>
              <Link to="/about" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">About 2026</Link>
              <Link to="/premium" className="bg-yellow-400 text-blue-900 hover:bg-yellow-500 px-4 py-2 rounded-md text-sm font-bold">Get Premium Alerts</Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/search" className="block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium">Find Flights</Link>
            <Link to="/about" className="block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium">About 2026</Link>
            <Link to="/premium" className="block bg-yellow-400 text-blue-900 hover:bg-yellow-500 px-3 py-2 rounded-md text-base font-bold text-center">Get Premium Alerts</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

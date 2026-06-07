import React from 'react';
import { Calendar, Users, Trophy, Map } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">About the 2026 World Cup</h1>
          <p className="text-xl text-blue-100">Prepare for the biggest sporting event in history.</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">48 Teams, 16 Cities</h2>
            <p className="text-gray-600 mb-4 text-lg">
              The 2026 World Cup will be hosted across three nations: the United States, Canada, and Mexico. 
              With 48 teams participating, there will be more matches and more opportunities for fans to travel than ever before.
            </p>
            <p className="text-gray-600 text-lg">
              GoalGetaway is dedicated to helping fans navigate the logistical challenge of traveling between host cities without breaking the bank.
            </p>
          </div>
          <div className="bg-gray-100 rounded-2xl p-8 shadow-inner">
             <img 
               src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80" 
               alt="Soccer Stadium" 
               className="rounded-lg shadow-lg mb-4"
             />
             <p className="text-sm text-gray-500 italic text-center">The final is expected to be held in New York/New Jersey.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-blue-600">
              <Calendar className="h-8 w-8" />
            </div>
            <h3 className="font-bold text-lg mb-2">June - July 2026</h3>
            <p className="text-gray-500 text-sm">Tournament dates</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-blue-600">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="font-bold text-lg mb-2">48 Nations</h3>
            <p className="text-gray-500 text-sm">Participating teams</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-blue-600">
              <Trophy className="h-8 w-8" />
            </div>
            <h3 className="font-bold text-lg mb-2">104 Matches</h3>
            <p className="text-gray-500 text-sm">Total tournament games</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-blue-600">
              <Map className="h-8 w-8" />
            </div>
            <h3 className="font-bold text-lg mb-2">16 Host Cities</h3>
            <p className="text-gray-500 text-sm">Across US, Mexico, Canada</p>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold mb-4">Travel Tip: Book Early!</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            History shows that flight prices to World Cup host cities jump by 300% in the six months leading up to the tournament. 
            Use GoalGetaway alerts to catch the "sweet spot" before the surge.
          </p>
          <button className="bg-blue-600 text-white font-bold py-3 px-10 rounded-lg hover:bg-blue-700 transition shadow-lg">
            Start Your Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

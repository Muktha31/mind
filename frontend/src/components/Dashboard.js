// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Welcome to MindFlow</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/checkin" className="block bg-blue-100 hover:bg-blue-200 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Daily Check-In</h2>
          <p>Log your mood, energy, and stress levels</p>
        </Link>
        <Link to="/gratitude" className="block bg-green-100 hover:bg-green-200 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Gratitude Jar</h2>
          <p>Store your achievements and positive moments</p>
        </Link>
        <Link to="/scenario" className="block bg-yellow-100 hover:bg-yellow-200 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Relaxation Scenario</h2>
          <p>Enter a calming visualization to reduce stress</p>
        </Link>
        <Link to="/journey" className="block bg-purple-100 hover:bg-purple-200 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Mindfulness Journey</h2>
          <p>Follow a personalized wellness journey</p>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;

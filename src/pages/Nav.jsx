import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="space-x-4">
        <Link to="/Home">
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
            Add Expense
          </button>
        </Link>
        <Link to="/About">
          <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition">
            About Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

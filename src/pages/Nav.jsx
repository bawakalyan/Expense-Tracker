import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <nav className="flex h-screen bg-gray-100 dark:bg-gray-900 text-white">
      <div className="flex flex-col items-start justify-center w-1/2 h-full p-10">
        <img
          src="https://t4.ftcdn.net/jpg/09/54/06/83/240_F_954068362_72P6eEEtHhAIZOrNiOarIX3qfjKe8i6b.jpg"
          className="h-16 rounded-3xl mb-5"
          alt="Expense Tracker Logo"
        />
        <h1 className="text-5xl font-bold mb-8 animate-fade-in">
          <span className="text-gray-800 dark:text-gray-100">Expense</span> 
          <span className="text-blue-500"> Tracker</span>
        </h1>

        {/* Content Section */}
        <div className="text-lg text-gray-600 dark:text-gray-400 mb-4 animate-fade-in">
          <p>Welcome to Expense Tracker!</p>
          <p>Manage your finances with ease using our Expense Tracker website.</p>
          <p>Track your income and expenses, set budgets, and receive alerts when you go over budget.</p>
          <p>Our platform is designed to help you stay on top of your finances and make informed decisions about your money.</p>
        </div>

        <div className="space-x-5">
          {/* Button for navigating to the Add Expense page */}
          <Link to="/Home">
            <button className="px-6 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition animate-fade-in">
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 1.5a1.5 1.5 0 013 0v6a1.5 1.5 0 01-3 0V1.5zm-2 0v6a1.5 1.5 0 003 0V1.5a1.5 1.5 0 00-3 0zm3 6a1.5 1.5 0 01-3 0v3a1.5 1.5 0 01-3 0v-3a1.5 1.5 0 013 0v3a1.5 1.5 0 013 0v-3z" />
                </svg>
                Add Expense
              </span>
            </button>
          </Link>

          {/* Button for navigating to the About page */}
          <Link to="/About">
            <button className="px-6 py-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition animate-fade-in">
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2h-2a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V10z" clipRule="evenodd" />
                </svg>
                About Page
              </span>
            </button>
          </Link>
        </div>
      </div>

      <div className="w-1/2 h-full">
        <img
          src="ass.webp"
          className="object-cover h-full w-full"
          alt="Background"
        />
      </div>
    </nav>
  );
};

export default Home;

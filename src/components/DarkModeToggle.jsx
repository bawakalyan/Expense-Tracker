// src/components/DarkModeToggle.jsx
import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModePreference = localStorage.getItem('darkMode');
    if (darkModePreference === 'true') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      localStorage.setItem('darkMode', 'true');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('darkMode', 'false');
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="absolute top-5 right-5 flex items-center">
      <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </span>
      <button
        onClick={toggleDarkMode}
        className={`ml-3 w-14 h-8 rounded-full flex items-center p-1 transition duration-300 ${
          isDarkMode ? 'bg-blue-100' : 'bg-gray-300'
        }`}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
            isDarkMode ? 'translate-x-6' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
};

export default DarkModeToggle;

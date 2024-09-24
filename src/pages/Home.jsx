// src/pages/Home.jsx
import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import ReportChart from '../components/ReportChart';
import DarkModeToggle from '../components/DarkModeToggle';

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <DarkModeToggle />
      <h1 className='font-medium text-center text-xl'>Expense Tracker</h1>
      <ExpenseForm />
      <ExpenseList />
      <ReportChart />
    </div>
  );
};

export default Home;

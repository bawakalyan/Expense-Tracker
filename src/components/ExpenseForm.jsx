import React, { useState } from 'react';
import axios from 'axios';
import { useExpenses } from '../context/ExpenseContext';

const ExpenseForm = () => {
  const { addExpense } = useExpenses();
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('food');
  const [currency, setCurrency] = useState('USD');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = localStorage.getItem('username');
    if (!username) {
      setError('You must be logged in to add expenses');
      return;
    }

    const newExpense = {
      title,
      amount: parseFloat(amount),
      category,
      currency,
      username,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/expenses/add', newExpense);
      alert(response.data.message);
      addExpense(newExpense);

      setTitle('');
      setAmount('');
      setCategory('food');
      setCurrency('USD');
      setError(null);
    } catch (err) {
      setError('Error adding expense. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">
        Add New Expense
      </h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Expense Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter expense title"
            required
          />
        </div>
        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Amount
          </label>
          <input
            type="Number"
            id="amount"
            autoComplete='off'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter amount"
            required
          />
        </div>
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="food">Food</option>
            <option value="enjoyment">Enjoyment</option>
            <option value="travel">Travel</option>
            <option value="hobbies">Hobbies</option>
            <option value="game">Game</option>
            <option value="others">Extras/Others</option>
          </select>
        </div>
        <div>
          <label htmlFor="currency" className='block text-sm font-medium text-gray-700 dark:text-gray-300'>Currency</label>
          <select
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className='mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500'
            required
          >
            <option value="USD">USD - US Dollar</option>
            <option value="EURO">EUR - Euro</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="INR">INR - Indian Rupee</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-bold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;

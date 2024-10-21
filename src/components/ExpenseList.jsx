import React, { useEffect } from 'react';
import { useExpenses } from '../context/ExpenseContext';
import axios from 'axios';

const ExpenseList = () => {
  const { expenses, setExpenses, removeExpense } = useExpenses();

  useEffect(() => {
    const fetchExpenses = async () => {
      const username = localStorage.getItem('username');
      if (!username) return;

      try {
        const response = await axios.get(`http://localhost:5000/expenses?username=${username}`);
        setExpenses(response.data);
      } catch (error) {
        console.error('Error fetching expenses', error);
      }
    };

    fetchExpenses();
  }, [setExpenses]);

  const formatCurrency = (amount, currency) => {
    return new Intl.NumberFormat(currency === 'EUR' ? 'de-DE' : 'en-US', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">Expense List</h2>
      {expenses.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-300">No expenses added yet.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {expenses.map((expense) => (
            <div
              key={expense.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">{expense.title}</h3>
                <button
                  onClick={() => removeExpense(expense.id)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  ✖
                </button>
              </div>
              <div className="text-gray-800 dark:text-gray-300 mb-4">
                <span className="text-xl font-bold">{formatCurrency(expense.amount, expense.currency)}</span>
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
                {expense.category}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExpenseList;

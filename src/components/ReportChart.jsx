// src/components/ReportChart.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { useExpenses } from '../context/ExpenseContext';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const ReportChart = () => {
  const { expenses } = useExpenses();

  const categoryTotals = expenses.reduce((acc, expense) => {
    if (acc[expense.category]) {
      acc[expense.category] += expense.amount;
    } else {
      acc[expense.category] = expense.amount;
    }
    return acc;
  }, {});

  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        label: 'Expense by Category',
        data: Object.values(categoryTotals),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
      },
    ],
  };

  return (
    <div className="my-10 mx-auto w-full max-w-lg">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">Expenses Report</h2>
      <Pie data={data} />
    </div>
  );
};

export default ReportChart;

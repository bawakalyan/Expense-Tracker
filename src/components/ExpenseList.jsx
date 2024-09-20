import React from 'react';
import { useExpenses } from '../context/ExpenseContext';

const ExpenseList = () => {
  const { expenses, removeExpense } = useExpenses();

  if (expenses.length === 0) {
    return <p>No expenses to show.</p>;
  }

  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id}>
          {expense.title}: ${expense.amount}
          <button onClick={() => removeExpense(expense.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
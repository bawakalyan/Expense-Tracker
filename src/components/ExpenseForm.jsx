import React, { useState } from 'react';
import { useExpenses } from '../context/ExpenseContext';

const ExpenseForm = () => {
    const { addExpense } = useExpenses();
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('Food') //Default value initialized

    const handleSubmit = (e) => {
        e.preventDefault();

        const newExpense = {
            id: Date.now(),
            title,
            amount: parseFloat(amount),
            category,
        };

        addExpense(newExpense);

        setTitle('');
        setAmount('');
        category('food')
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Expense Title"
                required
            />
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
                required
            />
            <select value={category}
                onChange={(e) => setCategory(e.target.value)} required>
                    <option value="food">Food</option>
                    <option value="enjoyment">Enjoyment</option>
                    <option value="travel">Travel</option>
                    <option value="game">Game</option>
                    <option value="hobbies">Hobbies</option>
                    <option value="others">Others</option>
                </select>
      <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;

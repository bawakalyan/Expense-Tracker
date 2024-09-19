import React, { useContext } from "react";
import { useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseForm = () => {
    const { addExpense } = useContext(ExpenseContext);
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const [user, setUser] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description === '' || amount === '' || user === '') {
            alert("Please fill in the fields")
            return;
        }

        const newExpense = {
            id: Date.now(),
            description,
            amount: parseFloat(amount),
            user
        }
        addExpense(newExpense);

        setDescription('');
        setAmount('')
        setUser('')
    }

    return (
        <form>
            <div>
                <label htmlFor="user">User</label>
                <input type="text" id='user' value={user} onChange={(e) => setUser(e.target.value)}
                placeholder="Enter User" required />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input type="text" id="description" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Enter expense description" required/>
            </div>
            <div>
                <label htmlFor="amount">Amount</label>
                <input type="text" id="amount" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount" required/>
            </div>

            <button type="submit">Add Expenses</button>
        </form>
    )
}

export default ExpenseForm;
import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseList = () => {
    const { expenses, deleteExpenses } = useContext(ExpenseContext);

    return (
        <div>
            <h2>Expense List</h2>
            {expenses.length === 0 ? (<p>No Expenses added yet</p>) : (<ul>
                {expensesmap((expense) => {
                    <li key={expense.id}>
                        <div>
                            <strong>{expense.description}</strong> - {expense.user}
                        </div>
                        <div>
                            Amount : ${expense.amount.toFixed(2)}
                        </div>
                        <button onClick={() => deleteExpenses(expense.id)}>Delete</button>
                    </li>
                })}
            </ul>)}
        </div>
    )
}

export default ExpenseList
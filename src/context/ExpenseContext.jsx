import React from "react";
import { createContext , useState } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({children})=>{
    const [expenses , setExpenses] = useState([]);

    const addExpense = (expenses)=>{
        setExpenses((prevExpenses)=>[...prevExpenses, expenses])
    };

    const deleteExpenses = (expenses)=>{
        setExpenses((prevExpenses)=> prevExpenses.filter(expenses =>expenses.id !==id))
    }

    return (
        <ExpenseContext.Provider value={{expenses, addExpense, deleteExpenses}}>
            {children}
        </ExpenseContext.Provider>
    )
}
import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import ReportChart from '../components/ReportChart';

const Home = () => {
    return (
        <div>
            <h1>Expense Tracker</h1>
            <nav>
                <ul>
                    <li><a href='/add-expense'>Add Expense</a></li>
                    <li><a href='/edit-expense'>Edit Expense</a></li>
                </ul>
            </nav>
            <ExpenseForm />
            <ExpenseList />
            <ReportChart />
        </div>
    )
}

export default Home;
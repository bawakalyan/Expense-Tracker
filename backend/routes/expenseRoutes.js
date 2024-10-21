const express = require('express');
const fs = require('fs');
const router = express.Router();

const expensesFilePath = './data/expenses.json';

router.post('/add', (req, res) => {
  const { username, title, amount, category } = req.body;
  const expenses = JSON.parse(fs.readFileSync(expensesFilePath));

  expenses.push({ username, title, amount, category });
  fs.writeFileSync(expensesFilePath, JSON.stringify(expenses));
  res.status(201).json({ message: 'Expense added successfully' });
});

router.get('/:username', (req, res) => {
  const { username } = req.params;
  const expenses = JSON.parse(fs.readFileSync(expensesFilePath));

  const userExpenses = expenses.filter(expense => expense.username === username);
  res.status(200).json(userExpenses);
});

module.exports = router;

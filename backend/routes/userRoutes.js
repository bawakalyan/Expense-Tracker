const express = require('express');
const fs = require('fs');
const router = express.Router();

const usersFilePath = './data/users.json';

router.post('/register', (req, res) => {
  const { username, password } = req.body;
  const users = JSON.parse(fs.readFileSync(usersFilePath));

 
  if (users.find(user => user.username === username)) {
    return res.status(400).json({ error: 'User already exists' });
  }

  users.push({ username, password });
  fs.writeFileSync(usersFilePath, JSON.stringify(users));
  res.status(201).json({ message: 'User registered successfully' });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const users = JSON.parse(fs.readFileSync(usersFilePath));

  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }

  res.status(200).json({ message: 'Login successful' });
});


module.exports = router;

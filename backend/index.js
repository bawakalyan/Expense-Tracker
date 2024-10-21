const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Corrected import
const expenseRoutes = require('./routes/expenseRoutes'); 
const { readFileSync, writeFileSync, existsSync } = require('fs');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/expenses', expenseRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

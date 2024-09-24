import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ExpenseProvider } from './context/ExpenseContext';
import Home from './pages/Home';
import DarkModeToggle from './components/DarkModeToggle'; // Import the toggle button

const App = () => {
  return (
    <ExpenseProvider>
      <Router>
        <DarkModeToggle /> {/* Add the toggle button */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ExpenseProvider>
  );
};

export default App;

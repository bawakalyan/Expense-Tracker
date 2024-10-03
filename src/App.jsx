import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ExpenseProvider } from './context/ExpenseContext';
import Home from './pages/Home';
import About from './pages/About';
import Nav from './pages/Nav';
import DarkModeToggle from './components/DarkModeToggle'; // Import the toggle button

const App = () => {
  return (
    <ExpenseProvider>
      <Router>
        <DarkModeToggle /> {/* Add the toggle button */}
        <Routes>
          <Route path="/" element={<Nav />} /> {/* Default route */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ExpenseProvider>
  );
};

export default App;

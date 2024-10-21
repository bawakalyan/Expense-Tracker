import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ExpenseProvider } from './context/ExpenseContext';
import Home from './pages/Home';
import About from './pages/About';
import Nav from './pages/Nav';
import DarkModeToggle from './components/DarkModeToggle';
import LoginForm from './pages/Login';
import RegisterForm from './pages/Register';

const App = () => {
  return (
    <ExpenseProvider>
      <Router>
        <DarkModeToggle />
        <Routes>
          <Route path="/" element={<LoginForm/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/nav" element={<Nav/>} />
          <Route path="/home" element={<Home />} />
          <Route path= "/register" element={<RegisterForm/>}/>
        </Routes>
      </Router>
    </ExpenseProvider>
  );
};

export default App;

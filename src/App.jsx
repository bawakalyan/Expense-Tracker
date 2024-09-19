import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ExpenseProvider } from './context/ExpenseContext';
import Home from './pages/Home'

const App = () => {
  return (
    <ExpenseProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </Router>
    </ExpenseProvider>
  )
}

export default App

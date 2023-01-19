import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import './App.css';
import Qoute from './Components/Qoute/Qoute';
import CalculatorPage from './Components/CalculatorPage/CalculatorPage';

function App() {
  return (
    <>
      <header>
        <h1>Math Magicians</h1>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/calculator">Calculator</Link></li>
          <li><Link to="/quote">Quote</Link></li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<Qoute />} />
      </Routes>

    </>
  );
}

export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Home from './Home';
import SORCalculator from './SORcalculator';
// import SORCalculation from './SORCalculation';

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/sor-calculator"  element={<SORCalculator/>} />
      </Routes>
    </Router>
  );
}

export default App;


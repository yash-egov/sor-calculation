// src/Home.js
import React from 'react';
import SORCalculator from './SORcalculator';
import './styles.css';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <h1>This is Home Page Hi</h1>
        <div className='nav_button'>
        <Link to="/sor-calculator" style={{textDecoration:"none" , color:"grey" , fontSize:"40px" , backgroundColor:"orange" , padding:"10px"}}>Go to SOR Calculation</Link>
        </div>
    </div>
  );
};

export default Home;

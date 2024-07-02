import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, ProductSlide, Product, ProductSteps, Uses, Contact, Questions } from './containers';
import { Bottom, Navbar } from './components';
import './App.css';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  
  return (
    <div >
      <Navbar/>
    </div>
  );
};

export default App;

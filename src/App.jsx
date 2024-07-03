import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Header, ProductSlide, Product, ProductSteps, Uses, Contact, Questions } from './containers';
import { Bottom, Navbar } from './components';
import Goals from './containers/goals/Goals';
import Calendar from './containers/calendar/Calender'; // Fix the path here
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Calendar />} /> {/* Set Calendar as the default route */}
          <Route path="/goals" element={<Goals />} />
          <Route path="/calendar" element={<Calendar />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

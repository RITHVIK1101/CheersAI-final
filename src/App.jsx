import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Navbar } from './components';
import Goals from './containers/goals/Goals';
import Calendar from './containers/calendar/Calender';
import ChatCall from './containers/chatCall/ChatCall';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<ChatCall />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
import React from 'react';
import './goals.css';

const Goals = () => {
  const organizationalGoals = [
    { name: "Increase Sales revenue: $950k in Q1", dueDate: "March 13, 2022", owner: "owner1.jpg", progress: "$427,303 / $950,000", status: "ON TRACK" },
    { name: "Launch a new goal setting feature by Spring", dueDate: "March 13, 2022", owner: "owner2.jpg", progress: "50% / 100%", status: "ON TRACK" },
    { name: "Host 3 parties for staff", dueDate: "March 13, 2022", owner: "owner3.jpg", progress: "1 / 3", status: "BEHIND" }
  ];

  const departmentalGoals = [
    { name: "Improve CSAT by 10%", dueDate: "March 13, 2022", owner: "owner4.jpg", progress: "8% / 10%", status: "ON TRACK" },
    { name: "Improve NPS by 23 points", dueDate: "March 13, 2022", owner: "owner5.jpg", progress: "14 / 23", status: "ON TRACK" }
  ];

  const renderGoals = (goals) => {
    return goals.map((goal, index) => (
      <div key={index} className="goal-item">
        <span className="goal-name">{goal.name}</span>
        <span className="goal-due-date">{goal.dueDate}</span>
        <span className="goal-owner"><img src={goal.owner} alt="Owner" /></span>
        <span className="goal-progress">{goal.progress}</span>
        <span className={`goal-status ${goal.status.replace(' ', '-').toLowerCase()}`}>{goal.status}</span>
      </div>
    ));
  };

  return (
    <div className="container">
      <main className="main-content">
        <header className="main-header">
          <input type="text" placeholder="Search employees" className="search-input" />
          <div className="header-icons">
            <button className="filter-btn">Filter</button>
            <button className="create-goal-btn">+ Create a goal</button>
            <div className="profile-pic"></div>
          </div>
        </header>
        <section className="goals-section">
          <div className="goals-header">
            <h1>Goals</h1>
            <div className="goals-tabs">
              <a href="#">My goals</a>
              <a href="#" className="active">All available goals</a>
            </div>
          </div>
          <div className="goals-content">
            <div className="goal-category">
              <h2>Organizational</h2>
              <div className="goal-card">
                {renderGoals(organizationalGoals)}
              </div>
            </div>
            <div className="goal-category">
              <h2>Departmental</h2>
              <div className="goal-card">
                {renderGoals(departmentalGoals)}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Goals;

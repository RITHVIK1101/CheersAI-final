import React, { useState } from 'react';
import { format } from 'date-fns';
import './goals.css';

const Goals = () => {
  const [givenGoals, setGivenGoals] = useState([
    { name: "Host 3 parties for staff", startDate: "2022-01-01", dueDate: "March 13, 2022", description: "Host three parties for staff by the end of the first quarter.", owner: "owner3.jpg", progress: "1 / 3", status: "BEHIND" }
  ]);

  const [currentGoals, setCurrentGoals] = useState([
    { name: "Improve NPS by 23 points", startDate: "2022-01-01", dueDate: "March 13, 2022", description: "Improve Net Promoter Score (NPS) by 23 points by the end of the first quarter.", owner: "owner5.jpg", progress: "14 / 23", status: "ON TRACK" }
  ]);

  const [completedGoals, setCompletedGoals] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newGoal, setNewGoal] = useState({ name: '', startDate: '', endDate: '', description: '' });
  const [hoveredGoal, setHoveredGoal] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGoal({ ...newGoal, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newGoalObj = {
      name: newGoal.name,
      startDate: newGoal.startDate,
      dueDate: format(new Date(newGoal.endDate), 'MMMM dd, yyyy'),
      description: newGoal.description,
      owner: "owner6.jpg", // Add the appropriate owner image
      progress: "0% / 100%",
      status: "ON TRACK"
    };
    setCurrentGoals([...currentGoals, newGoalObj]);
    setIsModalOpen(false);
    setNewGoal({ name: '', startDate: '', endDate: '', description: '' });
  };

  const completeGoal = (goal, category) => {
    setCompletedGoals([...completedGoals, goal]);
    if (category === 'given') {
      setGivenGoals(givenGoals.filter(g => g !== goal));
    } else if (category === 'current') {
      setCurrentGoals(currentGoals.filter(g => g !== goal));
    }
  };

  const renderGoals = (goals, category) => {
    return goals.map((goal, index) => (
      <div
        key={index}
        className="goal-item"
        onMouseEnter={() => setHoveredGoal(goal)}
        onMouseLeave={() => setHoveredGoal(null)}
      >
        <span className="goal-name">{goal.name}</span>
        <span className="goal-due-date">{goal.dueDate}</span>
        <span className="goal-owner"><img src={goal.owner} alt="Owner" /></span>
        <span className="goal-progress">{goal.progress}</span>
        <span className={`goal-status ${goal.status.replace(' ', '-').toLowerCase()}`}>{goal.status}</span>
        <button onClick={() => completeGoal(goal, category)}>Complete Goal</button>
        {hoveredGoal === goal && (
          <div className="goal-popup">
            <p><strong>Name:</strong> {goal.name}</p>
            <p><strong>Start Date:</strong> {format(new Date(goal.startDate), 'MMMM dd, yyyy')}</p>
            <p><strong>End Date:</strong> {goal.dueDate}</p>
            <p><strong>Description:</strong> {goal.description}</p>
          </div>
        )}
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
            <button className="create-goal-btn" onClick={() => setIsModalOpen(true)}>+ Create a goal</button>
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
              <h2>Given goals</h2>
              <div className="goal-card">
                {renderGoals(givenGoals, 'given')}
              </div>
            </div>
            <div className="goal-category">
              <h2>Current goals</h2>
              <div className="goal-card">
                {renderGoals(currentGoals, 'current')}
              </div>
            </div>
            <div className="goal-category">
              <h2>Completed goals</h2>
              <div className="goal-card">
                {renderGoals(completedGoals, 'completed')}
              </div>
            </div>
          </div>
        </section>
      </main>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Create a New Goal</h2>
            <form onSubmit={handleFormSubmit}>
              <label>
                Goal Name:
                <input type="text" name="name" value={newGoal.name} onChange={handleInputChange} required />
              </label>
              <label>
                Start Date:
                <input type="date" name="startDate" value={newGoal.startDate} onChange={handleInputChange} required />
              </label>
              <label>
                End Date:
                <input type="date" name="endDate" value={newGoal.endDate} onChange={handleInputChange} required />
              </label>
              <label>
                Description:
                <textarea name="description" value={newGoal.description} onChange={handleInputChange} required></textarea>
              </label>
              <button type="submit">Save Goal</button>
              <button type="button" onClick={() => setIsModalOpen(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Goals;



import LandingPage from '../src/pages/LandingPage';
import Login from './BusinnesLogic/Authentication/LoginUser';
import Register from './BusinnesLogic/Authentication/RegisterUser';
import AdminDashboard from './BusinnesLogic/DashBoards/AdminDashboard';
import UserDashboard from './BusinnesLogic/DashBoards/UserDashboard';

import WorkoutHomePage from './UserLogic/User/UserWorkouts/WorkoutsPages/WorkoutsHomePage';


import './App.css'
import './StylesCss/fonts.css';
import {  Routes, Route } from 'react-router-dom';
import WorkoutPlanLanding from './UserLogic/User/UserWorkouts/WorkoutsPages/WorkoutPlanLanding';




function App() {
  return (
 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login onClose={() => {}} />} />
        <Route path="/register" element={<Register onClose={() => {}} />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path='/user/workouts' element={<WorkoutHomePage />} />
        <Route path='/user/workoutplan' element={<WorkoutPlanLanding />} />

      </Routes>
    
  );
}

export default App;

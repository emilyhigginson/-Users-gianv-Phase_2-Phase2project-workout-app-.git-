import React from "react";
import { NavLink } from "react-router-dom";
import home from './fonts/foundation_black_24dp.svg'
import weight from './fonts/fitness_center_black_24dp.svg'
import check from './fonts/check_circle_black_24dp.svg'
import workoutperson from './fonts/workoutperson.svg'

function NavBar() {
  return (
    <div className="navBar">
      <NavLink to="/" className="links" exact>
        <img src={home}/> <span>Home</span>
      </NavLink>
      <NavLink to='/exercises' className="links" exact>
      <img src={workoutperson}/> <span>Exercises</span> 
       </NavLink>
      <NavLink
        to="/myworkouts"
        activeClassName="active"
        exact
        className="links"
      >
       <img src={weight}/> <span>My Workouts</span>
      </NavLink>
      <NavLink to="/completedworkouts" className="links">
        <img src ={check}/> <span>Completed Workouts</span>
      </NavLink>

      
    </div>
  );
}

export default NavBar;

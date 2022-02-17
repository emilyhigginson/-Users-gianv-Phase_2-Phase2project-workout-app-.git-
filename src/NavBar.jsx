import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import home from './fonts/foundation_black_24dp.svg'
import weight from './fonts/fitness_center_black_24dp.svg'
import check from './fonts/check_circle_black_24dp.svg'
import workoutperson from './fonts/workoutperson.svg'

function NavBar() {
  return (
    <div className="navBar">
      <h1 className="title">Git Commit, Git Fit</h1>
      <NavLink to="/" className="links" exact>
        Home <br></br><img src={home}/>
      </NavLink>
      <NavLink to='/exercises' className="links" exact>
        Exercises<br></br> <img src={workoutperson}/>
       </NavLink>
      <NavLink
        to="/myworkouts"
        activeClassName="active"
        exact
        className="links"
      >
        My Workouts<br></br><img src={weight}/>
      </NavLink>
      <NavLink to="/completedworkouts" className="links">
        Completed Workouts<br></br><img src ={check}/>
      </NavLink>

      
    </div>
  );
}

export default NavBar;

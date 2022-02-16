import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import home from './fonts/foundation_black_24dp.svg'
import weight from './fonts/fitness_center_black_24dp.svg'
function NavBar() {
  return (
    <div className="navBar">
      <h1 className="title">git commit -m "Git Fit"</h1>
      <NavLink to="/" className="links" exact>
        Home <br></br><img src={home}/>
      </NavLink>
      <NavLink
        to="/myworkouts"
        activeClassName="active"
        exact
        className="links"
      >
        My Workouts<br></br><img src={weight}/>
      </NavLink>
      
    </div>
  );
}

export default NavBar;

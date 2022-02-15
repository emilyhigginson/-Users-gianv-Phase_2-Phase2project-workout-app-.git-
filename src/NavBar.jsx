import React, { useState } from "react";

function NavBar() {
  const [home, setHome] = useState(true);

  function toggleHome() {
    setHome((home) => !home);
  }
  return (
    <div  className = "navBar" onClick={toggleHome}>
      <h1 className="title">git commit -m "Git Fit"</h1>
      <button className="toggleHome">{home ? " Go To My Workouts" : "Back To Home"}</button>
    </div>
  );
}

export default NavBar;

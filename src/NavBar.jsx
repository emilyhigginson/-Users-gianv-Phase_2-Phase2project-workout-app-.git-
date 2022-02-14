import React, { useState } from "react";

function NavBar() {
  const [home, setHome] = useState(true);

  function toggleHome() {
    setHome((home) => !home);
  }
  return (
    <div onClick={toggleHome}>
      <button>{home ? " Go To My Workouts" : "Back To Home"}</button>
    </div>
  );
}

export default NavBar;

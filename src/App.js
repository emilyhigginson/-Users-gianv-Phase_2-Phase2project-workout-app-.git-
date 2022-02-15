import { Route, Switch, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import MyWorkouts from "./MyWorkouts";
import NavBar from "./NavBar";
import Home from "./Home";
import "./style.css";

function App() {
  const [woArray, setWoArray] = useState([]);
  const [myWoArray, setMyWoArray] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/workouts")
      .then((res) => res.json())
      .then((data) => setWoArray(data));
  }, []);

  return (
    <div >
      <div id="overlay"></div>
      <NavBar />
      <Switch>
        <Route exact path="/myworkouts">
          <MyWorkouts myWoArray={myWoArray} />
        </Route>
        <Route exact path="/">
          <Home
            myWoArray={myWoArray}
            setWoArray={setWoArray}
            woArray={woArray}
            setMyWoArray={setMyWoArray}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

import { Route, Switch, NavLink } from "react-router-dom";
import React, { useState, useEffect,Fragment   } from "react";
import MyWorkouts from "./MyWorkouts";
import CompletedWorkouts from "./CompletedWorkouts";
import NavBar from "./NavBar";
import Exercises from "./Exercises";
import Home from "./Home";
import { v4 as uuidv4 } from "uuid";
import "./style.css";

function App() {
  const [woArray, setWoArray] = useState([]);
  const [myWoArray, setMyWoArray] = useState([]);
  const [loggedWorkouts, setLoggedWorkouts] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/workouts")
      .then((res) => res.json())
      .then((data) => setWoArray(data));
  }, []);
  
  function addLoggedExercise(loggedExercise) {
    setLoggedWorkouts({...loggedWorkouts, [uuidv4()]: loggedExercise
    });
  }

  return (
    <div>
      <div id="overlay"></div>
      <h1 className="title">Git Commit, Git Fit</h1>
      <Switch>
        <Route exact path="/" >
           <Home/>
        </Route>
        <Fragment>
        <NavBar />
        <Route exact path="/myworkouts">
          <MyWorkouts
            loggedWorkouts={loggedWorkouts}
            addLoggedExercise={addLoggedExercise}
            myWoArray={myWoArray}
          />
        </Route>
        <Route exact path="/completedworkouts">
          <CompletedWorkouts loggedWorkouts={loggedWorkouts} setLoggedWorkouts={setLoggedWorkouts} />
        </Route>
        <Route exact path="/exercises">
          <Exercises
            addLoggedExercise={addLoggedExercise}
            myWoArray={myWoArray}
            setWoArray={setWoArray}
            woArray={woArray}
            setMyWoArray={setMyWoArray}
          />
        </Route>
        </Fragment>
      </Switch>
    </div>
  );
}

export default App;

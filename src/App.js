import { Route, Switch, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import MyWorkouts from "./MyWorkouts";
import CompletedWorkouts from "./CompletedWorkouts";
import NavBar from "./NavBar";
import Home from "./Home";
import { v4 as uuidv4 } from "uuid";
import "./style.css";

function App() {
  const [woArray, setWoArray] = useState([]);
  const [myWoArray, setMyWoArray] = useState([]);
  const [loggedWorkouts, setLoggedWorkouts] = useState({});
  // const [title, setTitle]=useState('')

  useEffect(() => {
    fetch("http://localhost:3000/workouts")
      .then((res) => res.json())
      .then((data) => setWoArray(data));
  }, []);

  let d = Date.now();
  // console.log(time);
  
  const seconds=Math.floor((d/1000) % 60)
  const minutes=Math.floor((d/ (1000*60)) % 60)
  const hours=Math.floor((d/(1000*60*60) % 24))
  const AmericanHours = hours-5

  const timestamp = AmericanHours + ":" + minutes + ":" + seconds
  
  function addLoggedExercise(loggedExercise, timestamp) {
    setLoggedWorkouts({...loggedWorkouts, timestamp, [uuidv4()]: loggedExercise
    });
  }
  console.log(timestamp);

  return (
    <div>
      <div id="overlay"></div>
      <NavBar />
      <Switch>
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
        <Route exact path="/">
          <Home
            addLoggedExercise={addLoggedExercise}
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

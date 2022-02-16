import React, {useState} from "react";
import WorkoutCard from "./WorkoutCard";

function MyWorkouts({ myWoArray, addLoggedExercise }) {
  
const myWo= myWoArray.map((wo) => {
    return <WorkoutCard key={wo.id} wo={wo} addLoggedExercise={addLoggedExercise}/>;
  });

  function postWorkout(myWo){
    fetch('http://localhost:3000/logged', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(myWo),
    })
    .then(response => response.json())
    .then(loggedWo=> addLoggedExercise(loggedWo))
  }
 
  return (
    <div>
      <h1 className="pageHeader">My Workouts</h1>
   <div className="myWorkouts">{myWo}</div>
   <button onClick={postWorkout}>Log This Workout</button>
    </div>
  );
}

export default MyWorkouts;

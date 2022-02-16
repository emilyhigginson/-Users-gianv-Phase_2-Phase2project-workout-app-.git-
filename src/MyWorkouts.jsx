import React, {useState} from "react";
import WorkoutCard from "./WorkoutCard";

function MyWorkouts({ myWoArray }) {
const [loggedWorkout, setLoggedWorkout] = useState({name:""})
  
const myWo= myWoArray.map((wo) => {
    return <WorkoutCard key={wo.id} wo={wo}/>;
  });
  const {name} = myWo
  function handleLogWorkout(){
    setLoggedWorkout({...loggedWorkout, name:name})
    console.log(loggedWorkout);
  }
  return (
    <div>
      <p>My Workouts</p>
   <div className="myWorkouts">{myWo}</div>
   <button onClick={setLoggedWorkout}>Log This Workout</button>
    </div>
  );
}

export default MyWorkouts;

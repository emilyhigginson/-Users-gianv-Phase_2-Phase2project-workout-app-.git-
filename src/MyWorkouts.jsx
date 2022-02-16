import React from "react";
import WorkoutCard from "./WorkoutCard";
import RemoveButton from "./RemoveButton";

function MyWorkouts({ myWoArray }) {

  const myWo= myWoArray.map((wo) => {
    return <WorkoutCard key={wo.id} wo={wo}/>;
  });
  return (
    <div >
      <p>My Workouts</p>
   <div className="myWorkouts">{myWo}</div>
   <button>Log This Workout</button>
    </div>
  );
}

export default MyWorkouts;

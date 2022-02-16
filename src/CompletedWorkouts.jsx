import React from "react";
import LoggedWoItem from "./LoggedWoItem";

function CompletedWorkouts({ loggedWorkouts }) {
  
  const logged=loggedWorkouts.map((wo)=>{
    return <LoggedWoItem
    key={wo.id}
    wo={wo.loggedExercise}
    />
  })
  console.log(logged)
  return (
    <div>
      <h3>{logged}</h3>
      <div></div>
    </div>
  );
}

export default CompletedWorkouts;

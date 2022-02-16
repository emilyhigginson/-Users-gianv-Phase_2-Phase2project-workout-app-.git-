import React from "react";
import LoggedWoItem from "./LoggedWoItem";

function CompletedWorkouts({ loggedWorkouts }) {
  const logged=Object.keys(loggedWorkouts).map((wo)=>{
    return <LoggedWoItem
    wo={wo}
    />
  })
  return (
    <div>
      <h3>{logged}</h3>
      <div></div>
    </div>
  );
}

export default CompletedWorkouts;

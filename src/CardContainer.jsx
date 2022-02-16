import React from "react";
import WorkoutCard from "./WorkoutCard";

function CardContainer({ woArray, onAddWorkout}) {

  const woCards = woArray.map((wo) => {
    return <WorkoutCard key={wo.id} wo={wo} onAddWorkout={onAddWorkout}/>;
  });

  return <div className="cardDisplay">{woCards}</div>;
}

export default CardContainer;

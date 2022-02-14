import React from "react";
import WorkoutCard from "./WorkoutCard";

function CardContainer({ woArray }) {
  const woCards = woArray.map((wo) => {
    return <WorkoutCard key={wo.id} wo={wo} />;
  });

  return <div className="cardDisplay">{woCards}</div>;
}

export default CardContainer;

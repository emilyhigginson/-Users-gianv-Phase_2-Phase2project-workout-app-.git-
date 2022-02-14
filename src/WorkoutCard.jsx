import React, { useState } from "react";

function WorkoutCard({ wo , onAddWorkout}) {
  const [blurb, setBlurb] = useState(true);
  const [isAdded, setIsAdded]=useState(false)

  const { area, difficulty, instructions, name } = wo;

  function toggleCard() {
    setBlurb((blurb) => !blurb);
  }

  function handleAddWorkout(){
    setIsAdded(isAdded=>!isAdded)
    onAddWorkout(wo)
  }

  return (
    <div className="card" >
      <h4 onClick={toggleCard} >{name}</h4>
      <p>{blurb ? area : instructions}</p>
      <p>Difficulty: {difficulty}/5</p>

      <button onClick={handleAddWorkout}>{isAdded ?" Remove from Workout" : "Add to Workout"}</button>
    </div>
  );
}

export default WorkoutCard;

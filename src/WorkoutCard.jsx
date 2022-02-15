import React, { useState } from "react";
import MuscleImage from "./MuscleImage";

function WorkoutCard({ wo, onAddWorkout }) {
  const [blurb, setBlurb] = useState(true);
  const [isAdded, setIsAdded] = useState(false)

  const { area, difficulty, instructions, name } = wo;

  function toggleCard() {
    setBlurb((blurb) => !blurb);
  }

  function handleAddWorkout() {
    setIsAdded(isAdded => !isAdded)
    onAddWorkout(wo)
  }

  return (
    <div className="card" >
      <p className="workoutName" onClick={toggleCard} >{name}</p>
      <p className="muscleGroup">{blurb ? area : instructions}</p>
      <MuscleImage area={area} />
      <p>Difficulty: {difficulty}/5</p>

      <button onClick={handleAddWorkout}>{isAdded ? " Remove from Workout" : "Add to Workout"}</button>
    </div>
  );
  }

export default WorkoutCard;

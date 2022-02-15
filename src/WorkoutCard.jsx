import React, { useState } from "react";
import MuscleImage from "./MuscleImage";

function WorkoutCard({ wo, onAddWorkout }) {
  const [isAdded, setIsAdded] = useState(false)
  const [style, setStyle]=useState('none')

  const { area, difficulty, instructions, name } = wo;

  function toggleCard(e) {
    if (style==='none'){
      setStyle('block')
    } else if (style==='block'){
      setStyle('none')
    }
    
  }



  function handleAddWorkout() {
    setIsAdded(isAdded => !isAdded)
    onAddWorkout(wo)
  }

  return (
    <div className="card" >
      <div className="modalCard" style={{display:style}}>
        <button onClick={toggleCard}>x</button>
        <h2>How to: {name} </h2>
        <p>{instructions}</p>
      </div>
      <p className="workoutName" onClick={toggleCard} >{name}</p>
      <p className="muscleGroup">{area}</p>
      <MuscleImage area={area} />
      <p>Difficulty: {difficulty}/5</p>

      <button onClick={handleAddWorkout}>{isAdded ? " Remove from Workout" : "Add to Workout"}</button>
    </div>
  );
  }

export default WorkoutCard;

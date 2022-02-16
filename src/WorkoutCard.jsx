import React, { useState } from "react";
import MuscleImage from "./MuscleImage";
import x from "./fonts/highlight_off_black_24dp.svg";
import RemoveButton from "./RemoveButton"

function WorkoutCard({ wo, onAddWorkout }) {

  const [style, setStyle]=useState('none')

  const { area, difficulty, instructions, name, added } = wo;

  function toggleCard(e) {
    if (style==='none'){
      setStyle('block')
    } else if (style==='block'){
      setStyle('none')
    }
    
  }



  function handleAddWorkout() {
    onAddWorkout(wo)
  }



  return (
    <div className="card" >
      <div className="modalCard" style={{display:style}}>
        <button className="closeModal" onClick={toggleCard}><img src={x}/></button>
        <h2>How to: {name} </h2>
        <p>{instructions}</p>
      </div>
      <div className="workoutinfo" onClick={toggleCard}>
        <p className="workoutName">{name}</p>
        <p className="muscleGroup">{area}</p>
        <MuscleImage area={area} />
        <p>Difficulty: {difficulty}/5</p>
      </div>   
      <button onClick={handleAddWorkout}>{added ? 'Remove from Workout': 'Add to Workout' }</button>
    </div>
  );
  }

export default WorkoutCard;

import React, { useState } from "react";
import MuscleImage from "./MuscleImage";
import x from "./fonts/highlight_off_black_24dp.svg";
import trash from '../src/fonts/delete_forever_black_24dp.svg'


function WorkoutCard({ wo, onAddWorkout, addLoggedExercise, isClicked, setIsClicked }) {
  const { area, difficulty, instructions, name, added } = wo;

  const [style, setStyle] = useState("none");
  const [isShowing, setIsShowing]=useState(true)

  let d = Date.now();
  // console.log(time);
  

  function toggleCard(e) {
    if (style === "none") {
      setStyle("block");
    } else if (style === "block") {
      setStyle("none");
    }
  }
  function handleAddWorkout() {
    onAddWorkout(wo);
  }
  function handleRemove(){
    setIsShowing('none')
  }

  function handleLog() {
    addLoggedExercise({ logName: name, logArea: area});
    setIsClicked(true)
    handleRemove()

  }



  return (
    <div className="card" style={{display: isShowing}}>
      <div className="modalCard" style={{ display: style }}>
        <button className="closeModal" onClick={toggleCard}>
          <img src={x} />
        </button>
        <h2>How to: {name} </h2>
        <p>{instructions}</p>
      </div>
      <div className="workoutinfo" onClick={toggleCard}>
        <p name={name} className="workoutName">
          {name}
        </p>
        <p className="muscleGroup">{area}</p>
        <MuscleImage area={area} />
        <p>Difficulty: {difficulty}/5</p>
      </div>
      {added ? (
        <>
        <button onClick={handleLog}>Complete Exercise</button>
        <button className="trash" onClick={handleRemove}><img src={trash}/></button></>
      ) : (
        <button onClick={handleAddWorkout}>Add to Workout </button>
      )}
    </div>
  );
}

export default WorkoutCard;

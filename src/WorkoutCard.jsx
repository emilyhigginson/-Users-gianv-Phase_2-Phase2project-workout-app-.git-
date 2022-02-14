import React, { useState } from "react";

function WorkoutCard({ wo }) {
  const [blurb, setBlurb] = useState(true);

  const { area, difficulty, instructions, name } = wo;

  function toggleCard() {
    setBlurb((blurb) => !blurb);
  }

  return (
    <div className="card" onClick={toggleCard}>
      <h4>{name}</h4>
      <p>{blurb ? area : instructions}</p>
      <p>Difficulty: {difficulty}/5</p>
    </div>
  );
}

export default WorkoutCard;

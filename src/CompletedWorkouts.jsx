import React, { useState, useEffect } from "react";
import LoggedWoItem from "./LoggedWoItem";

function CompletedWorkouts() {
  const [completedArray, setCompletedArray] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/logged")
      .then((r) => r.json())
      .then((data) => setCompletedArray(data));
  }, []);

    
  const logged = completedArray.map((logWo) => {
    return Object.values(logWo).map((logEx) => {
      return  <LoggedWoItem key={logEx.id} logEx={logEx} />;
    
    });
  });

  return (
    <div >
      <h2 className="pageHeader">Logged Workouts:</h2>
      <br></br>
     
      <h3 className="log">{logged}</h3>
      <div></div>
    </div>
  );
}

export default CompletedWorkouts;

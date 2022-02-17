import React, {useState} from "react";
import WorkoutCard from "./WorkoutCard";

function MyWorkouts({ myWoArray, addLoggedExercise, loggedWorkouts, 
  // setTitle, title
 })
  {
  const[isClicked, setIsClicked] = useState(false)

  const myWo = myWoArray.map((wo) => {
    return (
      <WorkoutCard key={wo.id} wo={wo} addLoggedExercise={addLoggedExercise} isClicked= {isClicked} setIsClicked={setIsClicked}/>
    );
  });

  function postWorkout() {
    fetch("http://localhost:3000/logged", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loggedWorkouts),
    })
      .then((response) => response.json())
      .then((loggedWo) => addLoggedExercise(loggedWo));
      window.location.reload();

  }

  // function handleTitle(e) {
  //   const woTitle = e.target.value;
  //   setTitle(woTitle);
  // }

  return (
    <>
      <div>
        <h1 className="pageHeader">Today's Workout</h1>

        <div className="myWorkouts">{myWo}</div>
      </div>
      {/* <label>
        Name Today's Workout! <br></br>
        <input onChange={handleTitle} value={title} type="text" />
      </label> */}
      <br></br>
      {isClicked ? <button onClick={postWorkout}> Log this Workout </button> : null}
    </>
  );
}

export default MyWorkouts;

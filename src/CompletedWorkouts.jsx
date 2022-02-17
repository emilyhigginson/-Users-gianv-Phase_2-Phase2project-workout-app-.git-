import React, { useState, useEffect } from "react";
import LoggedWoItem from "./LoggedWoItem";

function CompletedWorkouts({ loggedWorkouts }) {
  const [completedArray, setCompletedArray] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/logged")
      .then((r) => r.json())
      .then((data) => setCompletedArray(data));
  }, []);

  const logged = completedArray.map((logWo) => {
    return Object.values(logWo).map((logEx) => {
      return <LoggedWoItem key={logEx.id} logEx={logEx} />;
    });
  });

  const d = new Date();
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const day = weekDays[d.getDay()];
  const month = d.getMonth() + 1;
  const date = d.getDate() + 1;
  const hour = d.getHours() + 1;
  const americanHours = () => (hour > 12 ? hour - 12 : hour);
  const minute = d.getMinutes() + 1;
  const timeStamp =
    day + ", " + month + "/" + date + " at " + americanHours() + ":" + minute;

  return (
    <div>
      <h2>Logged Workout:</h2>
      <br></br>
      <h3> {timeStamp} </h3>
      <h3>{logged}</h3>
      <div></div>
    </div>
  );
}

export default CompletedWorkouts;

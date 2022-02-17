import React from "react";

function LoggedWoItem({ logEx }) {
  const { logName, logArea } = logEx;

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
    <>
      <div >
        <div className="loggedWorkout">
        
        <p className="timeStamp">{logArea === undefined ? "Workout Completed on: " + timeStamp : null}</p>
          <h3>{logName} {logArea === undefined ? null : <h5>({logArea})</h5>}
          </h3>
        </div>
      </div>
    </>
  );
}

export default LoggedWoItem;

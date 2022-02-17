import React from "react";

function LoggedWoItem({ logEx }) {
  const { logName, logArea, logTime } = logEx;


  // Divide Time with a year
  // const d = new Date();
  
  // const weekDays = [
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  //   "Sunday",
  // ];

  // let day = weekDays[d.getDay()];
  // let month = d.getMonth() + 1;
  // let date = d.getDate() + 1;
  // let hour = d.getHours() + 1;
  // let americanHours = () => (hour > 12 ? hour - 12 : hour);
  // let minute = d.getMinutes() + 1;
  // let seconds = d.getSeconds() +1;
  // let timeStamp =
  //   day + ", " + month + "/" + date + " at " + americanHours() + ":" + minute + ":" + seconds;
  


  return (
    <>
      <div>
      <p className="timeStamp">{logArea === undefined ? "Workout Completed on: " + logTime : null}</p>
        <div className="log">
          <h3>{logName} {logArea === undefined ? null : <h5 className="area">({logArea})</h5>}
          </h3>
        </div>
      </div>
    </>
  );
}

export default LoggedWoItem;

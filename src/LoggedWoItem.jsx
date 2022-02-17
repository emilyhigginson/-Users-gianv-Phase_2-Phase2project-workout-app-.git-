import React from "react";

function LoggedWoItem({ logEx }) {
  const { logName, logArea } = logEx;
  

  return (
    <div className="loggedWorkout">
      <h3>{logName}</h3>
      {logArea===undefined? null :<h5>({logArea})</h5> }
      
    </div>
  );
}

export default LoggedWoItem;

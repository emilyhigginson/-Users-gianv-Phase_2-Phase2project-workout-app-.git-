import React from "react";

function LoggedWoItem({ logEx }) {
  const { logName, logArea } = logEx;




  return (
    <>
      <div>
      <p className="timeStamp">{logArea === undefined ? "Workout Completed on: "  : null}</p>
        <div className="log">
          <h3>{logName} {logArea === undefined ? null : <h5 className="area">({logArea})</h5>}
          </h3>
        </div>
      </div>
    </>
  );
}

export default LoggedWoItem;

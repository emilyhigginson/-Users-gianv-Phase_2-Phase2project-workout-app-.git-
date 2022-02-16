import React from 'react'

function LoggedWoItem({logged}) {
const {logName, logArea}=logged
  return (
    <div>{logName? logName : null}</div>
  )
}

export default LoggedWoItem
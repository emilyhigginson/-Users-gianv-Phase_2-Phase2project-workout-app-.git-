import React from 'react'

function LoggedWoItem({wo}) {
const {logName, logArea}=wo
  return (
    <div>{logName}{logArea}</div>
  )
}

export default LoggedWoItem
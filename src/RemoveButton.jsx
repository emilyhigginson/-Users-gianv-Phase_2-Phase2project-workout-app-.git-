import React from 'react'
import trash from '../src/fonts/delete_forever_black_24dp.svg'

function RemoveButton() {
  return (
    <div>
        <button><img src ={trash}/> </button>
    </div>
  )
}

export default RemoveButton
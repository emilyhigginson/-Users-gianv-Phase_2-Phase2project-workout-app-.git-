import React from 'react'
import abs from './MuscleImages/abs.png'
import bicep from './MuscleImages/bicep.png'
import chest from './MuscleImages/chest.png'
import glute from './MuscleImages/glute.png'
import quad from './MuscleImages/quad.png'
import shoulder from './MuscleImages/shoulder.png'
import tricep from './MuscleImages/tricep.png'

function MuscleImage({area}) {

    let image = "";
    if (area =="Abs") {
        image = abs
    }
    else if (area =="Biceps") {
        image = bicep;
    }  
    else if (area== "Chest") {
      image = chest;
    }
    else if (area == "Glutes") {
        image = glute;
    }
    else if (area == "Quads"){
        image = quad;
    }
    else if (area == "Shoulders"){
        image = shoulder;
    }
    else if (area == "Triceps"){
        image = tricep;
    }

  return (
    <img className= "muscleImage" src= {image} ></img>
  )
}

export default MuscleImage

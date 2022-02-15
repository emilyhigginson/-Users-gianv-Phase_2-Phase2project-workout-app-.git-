import React from 'react'
import abs from '/Users/emilyhigginson/-Users-gianv-Phase_2-Phase2project-workout-app-.git-/src/abs.png'
import bicep from '/Users/emilyhigginson/-Users-gianv-Phase_2-Phase2project-workout-app-.git-/src/MuscleImages/bicep.png'
import chest from '/Users/emilyhigginson/-Users-gianv-Phase_2-Phase2project-workout-app-.git-/src/MuscleImages/chest.png'
import glute from '/Users/emilyhigginson/-Users-gianv-Phase_2-Phase2project-workout-app-.git-/src/MuscleImages/glute.png'
import quad from '/Users/emilyhigginson/-Users-gianv-Phase_2-Phase2project-workout-app-.git-/src/MuscleImages/quad.png'
import shoulder from '/Users/emilyhigginson/-Users-gianv-Phase_2-Phase2project-workout-app-.git-/src/MuscleImages/shoulder.png'
import tricep from '/Users/emilyhigginson/-Users-gianv-Phase_2-Phase2project-workout-app-.git-/src/MuscleImages/tricep.png'
function MuscleImage({area}) {

    let image = "";
    if (area =="Abs") {
        image = "/static/media/abs.9b455d74d33c603c88a0.png"
    }
    else if (area =="Biceps") {
        image = "/static/media/bicep.69385744d92834012fe9.png";
    }  
    else if (area== "Chest") {
      image = "/static/media/chest.ef7978dd618cc736ee8b.png";
    }
    else if (area == "Glutes") {
        image = "/static/media/glute.38768b1c6a7eeb8aaa0b.png";
    }
    else if (area == "Quads"){
        image = "/static/media/quad.f6e651efe91a50ed2738.png";
    }
    else if (area == "Shoulders"){
        image = "/static/media/shoulder.78ca1c3389977b53cee8.png";
    }
    else if (area == "Triceps"){
        image = "/static/media/tricep.4990e65c47aab1cc1839.png";
    }

  return (
    <img className= "muscleImage" src= {image} ></img>
  )
}

export default MuscleImage

import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
    <Link to='/exercises' exact> <h1 className="one"> Exercise Library</h1>
     </Link>
     <Link to='/myworkouts'  activeClassName="active"
        exact > <h1 className="two"> Current Workouts</h1> </Link>
       <Link to='/completedworkouts' > <h1 className="three"> Completed Workouts</h1> </Link>
    </div>
  )
}

export default Home
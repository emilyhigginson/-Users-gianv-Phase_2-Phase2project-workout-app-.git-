import React, { useState, useEffect } from "react";
import CardContainer from "./CardContainer";
import Filter from "./Filter";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import './style.css'

function App() {
  const [woArray, setWoArray] = useState([]);
  const [selected, setSelected] = useState("All");

  useEffect(() => {
    fetch("http://localhost:3000/workouts")
      .then((res) => res.json())
      .then((data) => setWoArray(data));
  }, []);

  const filteredWoArray = woArray.filter(
    (workout) =>{
      if(selected==='All'){
        return true
      } else if (workout.area === selected) {
        return workout
      }
    } 
  );

  return (
    <div className="App">
      <NavBar />
      <Filter selected={selected} setSelected={setSelected} />
      <SearchBar />
      <div>
      <CardContainer  woArray={filteredWoArray} />
    </div>
    </div>
  );
}

export default App;

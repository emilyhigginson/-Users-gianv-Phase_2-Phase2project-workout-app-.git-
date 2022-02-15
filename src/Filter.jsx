import React from "react";

function Filter({setSelected}) {
  
  function handleFilter(e){
    setSelected(e.target.value)
  
  }

  return (

    <div className = "filter">
      <label for="muscles">Filter by Muscle Group:</label>
      <select onChange={handleFilter} name="area" id="filter">
        <option value="All">All</option>
        <option value="Abs">Abs</option>
        <option value="Quads">Quads</option>
        <option value="Glutes">Glutes</option>
        <option value="Biceps">Biceps</option>
        <option value="Triceps">Triceps</option>
        <option value="Shoulders">Shoulders</option>
        <option value="Chest">Chest</option>
      </select>
    </div>
  );
}

export default Filter;

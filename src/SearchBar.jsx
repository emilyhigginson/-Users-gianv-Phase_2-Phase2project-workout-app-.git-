import React from "react";

function SearchBar({ setSearchTerm, searchTerm, isChecked, setIsChecked }) {
  
  function handleChange(e) {
    // setIsChecked(e.target.checked)
    setIsChecked(isChecked => !isChecked)
  }
  console.log(isChecked)

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }
  return (
    <div className="search">
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        placeholder="Search By Name"
        value={searchTerm}
        onChange={handleSearch}
      />

      <input onChange= {handleChange} checked = {isChecked} id="check" type="checkbox" />
      <label for="check">Sort by Difficulty</label>
    </div>
  );
}

export default SearchBar;

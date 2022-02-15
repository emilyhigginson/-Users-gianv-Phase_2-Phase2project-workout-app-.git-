import React from "react";

function SearchBar({ setSearchTerm, searchTerm, isChecked, setIsChecked }) {
  function handleChange() {
    setIsChecked((isChecked) => !isChecked);
  }

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }
  return (
    <div className="search">
      <label htmlFor="search">Search:
      <input
        className="input"
        type="text"
        id="search"
        placeholder="Search By Name"
        value={searchTerm}
        onChange={handleSearch}
      /></label>

      <label className="check" for="check">
        
        <input
          className="checkbox"
          onChange={handleChange}
          checked={isChecked}
          id="check"
          type="checkbox"
        />

      </label>
      <span className="sort">Sort by Difficulty</span>
    </div>
  );
}

export default SearchBar;

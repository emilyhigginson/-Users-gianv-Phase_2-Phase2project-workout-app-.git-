import React from "react";

function SearchBar() {
  function handleSearch() {
    console.log("search");
  }
  return (
    <div className="search">
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        placeholder="Search By Name"
        onChange={handleSearch}
      />

      <input id="check" type="checkbox" />
      <label for="check">Sort by Difficulty</label>
    </div>
  );
}

export default SearchBar;

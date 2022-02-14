import React from "react";

function SearchBar({ setSearchTerm, searchTerm }) {
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

      <input id="check" type="checkbox" />
      <label for="check">Sort by Difficulty</label>
    </div>
  );
}

export default SearchBar;

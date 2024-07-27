import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [town, setTown] = useState("");

  const handleInputChange = (e) => {
    setTown(e.target.value);
  };

  const handleSearch = () => {
    onSearch(town);
  };

  return (
    <div>
      <input
        type="text"
        value={town}
        onChange={handleInputChange}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;

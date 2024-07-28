import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

function SearchBar({ onSearch }) {
  const [town, setTown] = useState("");

  const handleInputChange = (e) => {
    setTown(e.target.value);
  };

  const handleSearch = () => {
    onSearch(town);
  };

  return (
    <Row className="justify-content-md-center">
      <Col md="auto">
        <input
          type="text"
          value={town}
          onChange={handleInputChange}
          placeholder="Enter city name"
        />
        <button onClick={handleSearch}>Search</button>
      </Col>
    </Row>
  );
}

export default SearchBar;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyleForm = styled.div`
  display: flex;
`;

const StyleInput = styled.input`
  margin-right: 0.5rem;
  border-radius: 0.5rem;
`;

const StyleButton = styled.button`
  color: white;
  background-color: green;
  border-radius: 0.3rem;
  font-size: 1.2 rem;
  width: 100%;
  outline: none;
  border: none;
`;

//------------------------------------------------

function SearchBar({ search, setSearch, setRefresh }) {
  const handleChange = (event) => {
    const value = event.target.value;
    setSearch(value.toLowerCase());
  };

  const handleSubmit = () => {
    setRefresh(true);
  };
  return (
    <div>
      <StyleForm>
        <StyleInput
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={search}
          onChange={handleChange}
        />
        <Link to={search}>
          <StyleButton onClick={handleSubmit}>Search</StyleButton>
        </Link>
      </StyleForm>
    </div>
  );
}

export default SearchBar;

import React from "react";
import { search, setSearch } from "./DataList";
import styled from "styled-components";

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
`;

function SearchBar(search, setSearch) {
  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value.toLowerCase());
  };

  const handleSubmit = () => {
    console.log(search);
    setSearch("");
  };
  return (
    <div>
      <StyleForm>
        <StyleInput
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={handleChange}
          value={search}
        />
        <StyleButton onClick={handleSubmit}>Search</StyleButton>
      </StyleForm>
    </div>
  );
}

export default SearchBar;

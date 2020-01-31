import React from "react";
import styled from "styled-components";

const SearchFormContainer = styled.div`
  display: flex;
  justify-content: center;
  .wrapper-container {
    width: auto;
    padding: 2em;
  }

  .input {
    background: lightgray;
    width: 15em;
    height: 3.5em;
    font-family: monospace;
    caret-color: transparent;
    transition: width 0.3s linear;
    border-radius: 2em;
    outline: 0;
  }
  .wrapper:hover .input {
    padding: 0 10px;
    width: 18.75em;
    height: 3.5em;
    transition: width 0.3s linear;
    caret-color: black;
    text-transform: capitalize;
    font-size: 1em;
    font-weight: bold;
    caret-color: red;
    color: back;
  }
`;

export default function SearchForm({ handleInput, search }) {
  return (
    <SearchFormContainer>
      <div className="wrapper-container">
        <div className="wrapper">
          <form>
            <input
              value={search}
              onChange={handleInput}
              className="input"
              type="text"
              name="name"
              placeholder="search by name"
            />
          </form>
        </div>
      </div>
    </SearchFormContainer>
  );
}

import React, { useState } from "react";
import styled from "styled-components";

const SearchFormContainer = styled.div`
  display: flex;
  justify-content: center;
  .wrapper-container {
    width: auto;
    padding: 2em;
  }

  .input {
    outline: ;
    border: ;
    background: none;
    width: 12em;
    height: 2.5em;
    font-family: monospace;
    caret-color: transparent;
    transition: width 0.3s linear;
    border-radius: 2em;
    outline: 0;
  }
  .wrapper:hover .input {
    padding: 0 10px;
    width: 18.75em;
    height: 2.5em;
    transition: width 0.3s linear;
    caret-color: black;
    text-transform: capitalize;
    font-size: 1em;
    caret-color: red;
    color: white;
  }
`;

export default function SearchForm() {
  return (
    <SearchFormContainer>
      <div className="wrapper-container">
        <div className="wrapper">
          <input
            className="input"
            type="text"
            name="name"
            placeholder="search by name"
          />
        </div>
      </div>
    </SearchFormContainer>
  );
}

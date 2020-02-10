import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Text = styled.h1`
  color: black;
`;
export default function Header() {
  return (
    <header>
      <NavLink to="/">
        {" "}
        <Text>Rick &amp; Morty Fan Page</Text>
      </NavLink>
    </header>
  );
}

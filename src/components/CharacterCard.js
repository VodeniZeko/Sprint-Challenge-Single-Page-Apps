import React from "react";
import styled from "styled-components";

const CharacterCardContainer = styled.div`
  text-align: center;
`;

export default function CharacterCard({ char }) {
  const { image, name, gender, status } = char;
  return (
    <CharacterCardContainer className=" bg-silver dib br4 pa3 ma2 grow tc">
      <img src={image} alt={`this is ${name} from Rick and Morty`} />
      <h2>name: {name}</h2>
      <p>gender: {gender}</p>
      <p>status: {status}</p>
    </CharacterCardContainer>
  );
}

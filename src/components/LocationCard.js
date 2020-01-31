import React from "react";
import styled from "styled-components";

const LocationCardContainer = styled.div``;
export default function LocationCard(location) {
  const { name, type, dimension, residents, created } = location.location;
  return (
    <LocationCardContainer className=" bg-silver dib br4 pa3 ma2 grow tc">
      <h2>Location name: {name}</h2>
      <h2>Location type: {type}</h2>
      <p>location dimension: {dimension}</p>
      <p>populations: {residents.length}</p>
      <p>created at: {created}</p>
    </LocationCardContainer>
  );
}

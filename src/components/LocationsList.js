import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationsCard from "./LocationCard";
import styled from "styled-components";

const LocationListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function LocationsList() {
  const [locations, setLocations] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`https://rickandmortyapi.com/api/location/`)
  //     .then(res => {
  //       setLocations(res.data.results);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <LocationListContainer>
      {locations.map(location => (
        <LocationsCard location={location} />
      ))}
    </LocationListContainer>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationsCard from "./LocationCard";
import SearchForm from "./SearchForm";
import styled from "styled-components";

const LocationListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function LocationsList() {
  const [locations, setLocations] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/`)
      .then(res => {
        const results = res.data.results.filter(item =>
          item.name.toLowerCase().includes(search.toLocaleLowerCase())
        );
        setLocations(results);
      })
      .catch(err => {
        console.log(err);
      });
  }, [search]);

  const handleInput = e => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <SearchForm handleInput={handleInput} search={search} />
      <LocationListContainer>
        {locations.map(location => (
          <LocationsCard location={location} key={location.id} />
        ))}
      </LocationListContainer>
    </div>
  );
}

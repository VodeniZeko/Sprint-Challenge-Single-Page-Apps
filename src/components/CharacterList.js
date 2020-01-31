import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";
import SearchForm from "./SearchForm";

const CharacterListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        console.log(res.data);
        const results = res.data.results.filter(character =>
          character.name.toLowerCase().includes(search.toLowerCase())
        );
        setCharacters(results);
      })
      .catch(err => {
        console.log(err);
      });
  }, [search]);

  const handleInput = e => {
    setSearch(e.target.value);
  };
  console.log(search);
  return (
    <div>
      <SearchForm handleInput={handleInput} />
      <CharacterListContainer>
        {characters.map(char => (
          <CharacterCard key={char.id} char={char} />
        ))}
      </CharacterListContainer>
    </div>
  );
}

import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import Scroll from "./components/Scroll";
import SearchForm from "./components/SearchForm";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function App() {
  return (
    <main>
      <Header />
      <MainContainer>
        <Link to="/characters">
          <div className="bg-silver dib br4 pa3 ma2 grow tc">
            <h1>Characters</h1>
          </div>
        </Link>
        <Link to="/locations">
          <div className="bg-silver dib br4 pa3 ma2 grow tc">
            <h1>Locations</h1>
          </div>
        </Link>
      </MainContainer>
      <Route path="/characters">
        <SearchForm />
        <Scroll>
          <CharacterList />
        </Scroll>
      </Route>
      <Route path="/locations">
        <SearchForm />
        <Scroll>
          <LocationsList />
        </Scroll>
      </Route>
    </main>
  );
}

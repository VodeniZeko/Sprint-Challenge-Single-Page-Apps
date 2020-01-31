import React from "react";
import { Route, NavLink } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import Scroll from "./components/Scroll";
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
        <NavLink to="/characters">
          <div className="bg-silver dib br4 pa3 ma2 grow tc">
            <h1>Characters</h1>
          </div>
        </NavLink>
        <NavLink to="/locations">
          <div className="bg-silver dib br4 pa3 ma2 grow tc">
            <h1>Locations</h1>
          </div>
        </NavLink>
      </MainContainer>
      <Route path="/characters">
        <Scroll>
          <CharacterList />
        </Scroll>
      </Route>
      <Route path="/locations">
        <Scroll>
          <LocationsList />
        </Scroll>
      </Route>
    </main>
  );
}

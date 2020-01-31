import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import Scroll from "./components/Scroll";
import SearchForm from "./components/SearchForm";

export default function App() {
  return (
    <main>
      <Header />
      <Link to="/characters">
        <div>
          <h1>Characters</h1>
        </div>
      </Link>
      <Link to="/locations">
        <div>
          <h1>Locations</h1>
        </div>
      </Link>
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

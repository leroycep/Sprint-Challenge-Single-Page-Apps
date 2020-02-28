import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import WelcomePage from "./components/WelcomePage";

export default function App() {
  return (
    <main>
      <Header />
      <Navbar />
      <Switch>
        <Route path="/characters" component={CharacterList} />
        <Route path="/locations" component={LocationsList} />
        <Route path="/" component={WelcomePage} />
      </Switch>
    </main>
  );
}

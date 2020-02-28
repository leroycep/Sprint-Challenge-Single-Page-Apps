import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import { Route, Switch } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";

export default function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route path="/characters" component={CharacterList} />
        <Route path="/" component={WelcomePage} />
      </Switch>
    </main>
  );
}

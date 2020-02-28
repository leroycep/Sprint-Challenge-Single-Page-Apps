import React from "react";
import { NavLink } from "react-router-dom";

export default function App() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/characters">Characters</NavLink>
    </nav>
  );
}

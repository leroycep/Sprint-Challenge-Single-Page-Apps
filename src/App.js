import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import axios from "axios";

const CHARACTER_API =
  "https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/";

export default function App() {
  const [_info, setInfo] = useState({});
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(CHARACTER_API)
      .then(res => {
        setCharacters(res.data.results);
        setInfo(res.data.info);
      })
      .catch(err => console.log("Could not get characters", err));
  }, []);

  return (
    <main>
      <Header />
      {characters.map(c => (
        <div>
          <h2>{c.name}</h2>
          <ul>
            <li>Status: {c.status}</li>
            <li>Species: {c.species}</li>
            <li>Type: {c.type}</li>
            <li>gender: {c.gender}</li>
          </ul>
        </div>
      ))}
    </main>
  );
}

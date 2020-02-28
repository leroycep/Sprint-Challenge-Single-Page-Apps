import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

const CHARACTER_API =
  "https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/";

export default function CharacterList() {
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
    <section className="character-list">
      {characters.map(c => (
        <CharacterCard character={c} />
      ))}
    </section>
  );
}

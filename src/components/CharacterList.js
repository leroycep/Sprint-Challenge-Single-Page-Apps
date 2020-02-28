import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const CHARACTER_API =
  "https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/";

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

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
    <Container className="character-list">
      {characters.map((c, idx) => (
        <CharacterCard key={idx} character={c} />
      ))}
    </Container>
  );
}

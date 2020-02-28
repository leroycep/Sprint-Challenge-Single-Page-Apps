import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
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
  const [search, setSearch] = useState("");
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(CHARACTER_API)
      .then(res => {
        setCharacters(res.data.results);
        setInfo(res.data.info);
      })
      .catch(err => console.log("Could not get characters", err));
  }, []);

  useEffect(() => {
    if (search !== "") {
      setFilteredCharacters(
        characters.filter(c =>
          c.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setFilteredCharacters(characters);
    }
  }, [search, characters]);

  return (
    <>
      <SearchForm search={search} setSearch={setSearch} />
      <Container className="character-list">
        {filteredCharacters.map((c, idx) => (
          <CharacterCard key={idx} character={c} />
        ))}
      </Container>
    </>
  );
}

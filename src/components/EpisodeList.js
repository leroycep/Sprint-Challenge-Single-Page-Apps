import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";
import SearchForm from "./SearchForm";
import styled from "styled-components";

const EPISODE_API = "https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/episode/";

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default function EpisodeList() {
  const [search, setSearch] = useState("");
  const [episodes, setEpisodes] = useState([]);
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);

  useEffect(() => {
    axios
      .get(EPISODE_API)
      .then(res => {
        setEpisodes(res.data.results);
      })
      .catch(err => console.log("Could not get episodes", err));
  }, []);

  useEffect(() => {
    if (search !== "") {
      setFilteredEpisodes(
        episodes.filter(l =>
          l.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setFilteredEpisodes(episodes);
    }
  }, [search, episodes]);

  return (
    <>
      <SearchForm search={search} setSearch={setSearch} />
      <Container>
        {filteredEpisodes.map((episode, idx) => (
          <EpisodeCard key={idx} episode={episode} />
        ))}
      </Container>
    </>
  );
}

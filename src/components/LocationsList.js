import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";
import SearchForm from "./SearchForm";
import styled from "styled-components";

const LOCATIONS_API =
  "https://rickandmortyapi.com/api/location/";

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default function LocationsList() {
  const [search, setSearch] = useState("");
  const [locations, setLocations] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState([]);

  useEffect(() => {
    axios
      .get(LOCATIONS_API)
      .then(res => {
        setLocations(res.data.results);
      })
      .catch(err => console.log("Could not get characters", err));
  }, []);

  useEffect(() => {
    if (search !== "") {
      setFilteredLocations(
        locations.filter(l =>
          l.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setFilteredLocations(locations);
    }
  }, [search, locations]);

  return (
    <>
      <SearchForm search={search} setSearch={setSearch} />
      <Container>
        {filteredLocations.map((l, idx) => (
          <LocationCard key={idx} location={l} />
        ))}
      </Container>
    </>
  );
}

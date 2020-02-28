import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 30%;
`;

export default function EpisodeCard({ episode }) {
  return (
    <Card>
      <h2>{episode.name}</h2>
      <ul>
        <li>{episode.episode}</li>
        <li>Air Date: {episode.air_date}</li>
      </ul>
    </Card>
  );
}

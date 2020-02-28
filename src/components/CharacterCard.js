import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 30%;
`;

export default function CharacterCard({ character }) {
  return (
    <Card>
      <h2>{character.name}</h2>
      <ul>
        <li>Status: {character.status}</li>
        <li>Species: {character.species}</li>
        <li>Type: {character.type}</li>
        <li>gender: {character.gender}</li>
      </ul>
    </Card>
  );
}

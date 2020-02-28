import React from "react";

export default function CharacterCard({ character }) {
  return (
    <div>
      <h2>{character.name}</h2>
      <ul>
        <li>Status: {character.status}</li>
        <li>Species: {character.species}</li>
        <li>Type: {character.type}</li>
        <li>gender: {character.gender}</li>
      </ul>
    </div>
  );
}

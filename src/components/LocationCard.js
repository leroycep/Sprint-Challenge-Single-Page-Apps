import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 30%;
`;

export default function LocationCard({ location }) {
  return (
    <Card>
      <h2>{location.name}</h2>
      <ul>
        <li>Type: {location.type}</li>
        <li>Dimension: {location.dimension}</li>
      </ul>
    </Card>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`;

const StyledNavLink = styled(NavLink)`
  padding: 1%;

  &.active {
    border: solid black 1px;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <StyledNavLink exact to="/">Home</StyledNavLink>
      <StyledNavLink to="/characters">Characters</StyledNavLink>
    </Nav>
  );
}

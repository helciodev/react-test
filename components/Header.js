import React from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Nav from "./Nav";
const HeaderElement = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.75rem 1.5rem;
  border: 1px solid red;
`;
function Header() {
  return (
    <HeaderElement>
      <Logo />
      <Nav />
      <Hamburger />
    </HeaderElement>
  );
}

export default Header;

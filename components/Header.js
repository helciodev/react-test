import React from "react";

import styled from "styled-components";
import Button from "./Button";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Nav from "./Nav";
const HeaderElement = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.75rem 1.5rem;
`;
function Header() {
  return (
    <HeaderElement>
      <Logo />
      <Nav />
      <Hamburger />
      <Button text='Download' />
    </HeaderElement>
  );
}

export default Header;

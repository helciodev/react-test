import React from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
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
      <Hamburger />
    </HeaderElement>
  );
}

export default Header;

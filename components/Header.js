import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
const HeaderElement = styled.header``;
function Header() {
  return (
    <HeaderElement>
      <Logo />
    </HeaderElement>
  );
}

export default Header;

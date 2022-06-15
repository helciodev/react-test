import Link from "next/link";
import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import styled from "styled-components";
import Button from "./Button";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Nav from "./Nav";
const HeaderElement = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
`;
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleDrawer() {
    setIsOpen((prevState) => !prevState);
  }
  console.log(isOpen);
  return (
    <HeaderElement>
      <Drawer open={isOpen} onClose={toggleDrawer} direction='left'>
        <nav>
          <ul>
            <li>
              <Link href='#'>Home</Link>
            </li>
            <li>
              <Link href='#'>About Us</Link>
            </li>
            <li>
              <Link href='#'>Get the app</Link>
            </li>
          </ul>
        </nav>
      </Drawer>
      <Logo />
      <Nav />
      <Hamburger toggleDrawer={toggleDrawer} />
      <Button text='Download' />
    </HeaderElement>
  );
}

export default Header;

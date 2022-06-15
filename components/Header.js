import Link from "next/link";
import Sticky from "react-stickynode";
import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import styled from "styled-components";
import Button from "./Button";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Nav from "./Nav";
const HeaderElement = styled.header`
  background-color: #fff8f1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem 1.5rem;

  .drawer {
    background-color: #fff8f1;
  }
  .mobile-nav {
    background-color: #fff8f1;
    height: 100vh;
    margin-top: 0;
    ul {
      margin-top: 50px;
      list-style: none;
      display: grid;
      place-content: center;
      gap: 3rem;

      li {
        font-size: 20px;
        line-height: 1.6%;
      }
    }
  }
`;
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleDrawer() {
    setIsOpen((prevState) => !prevState);
  }
  console.log(isOpen);
  return (
    <Sticky
      enabled={true}
      innerZ={1000}
      activeClass='box-shadow'
      innerActiveClass='box-shadow'
      releasedClass='released'
      top={0}
    >
      <HeaderElement>
        {isOpen && (
          <Drawer
            className='drawer'
            open={isOpen}
            onClose={toggleDrawer}
            direction='left'
          >
            <nav className='mobile-nav'>
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
        )}
        <Logo />
        <Nav />
        <Hamburger toggleDrawer={toggleDrawer} />
        <Button text='Download' />
      </HeaderElement>
    </Sticky>
  );
}

export default Header;

import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Navigation = styled.nav`
  @media screen and (min-width: 51px) {
    & {
      display: none;
    }
  }
  @media screen and (min-width: 720px) {
    & {
      display: block;
    }
  }

  ul {
    list-style: none;
    display: flex;
    gap: 3.5rem;
  }

  a {
    text-decoration: none;
    font-weight: 500;
    line-height: 2rem;
  }

  a:hover {
    color: var(--call-to-action);
    transition: all 0.3s ease;
  }
`;
function Nav() {
  return (
    <Navigation>
      <ul>
        <li>
          <Link href='#'>About Us</Link>
        </li>
        <li>
          <Link href='#'>Features</Link>
        </li>
        <li>
          <Link href='#'>How it works</Link>
        </li>
        <li>
          <Link href='#'>Support</Link>
        </li>
      </ul>
    </Navigation>
  );
}

export default Nav;

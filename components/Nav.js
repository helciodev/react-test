import Link from "next/link";
import React from "react";
const Navigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 3.5rem;
  }

  li {
    a {
      text-decoration: none;
      color: var(--black);
      font-weight: 500;
      line-height: 2rem;
    }
  }
`;
function Nav() {
  return (
    <Nav>
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
    </Nav>
  );
}

export default Nav;

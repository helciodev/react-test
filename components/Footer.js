import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
const FooterElement = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  .rights {
    color: var(--text-color);
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.016em;
    text-align: center;
  }

  .about-and-support {
    display: flex;
    gap: 80px;
    text-align: center;

    .about {
      display: flex;
      flex-direction: column;
      align-items: center;

      text-align: center;
    }

    ul {
      list-style: none;
      margin-top: -5px;
      display: flex;
      flex-direction: column;
      align-items: center;

      li {
        margin-right: 2rem;
      }
      a {
        color: var(--text-color);
        text-decoration: none;
        &:hover {
          color: #999;
        }
      }
    }
  }
  .logo-and-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  .logo-and-info p {
    //styleName: Body Text/Small/Regular;
    color: var(--text-color);
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.016em;
    text-align: center;
  }
`;
function Footer() {
  return (
    <FooterElement>
      <div className='about-and-support'>
        <div className='about'>
          <h3>About Us</h3>
          <ul>
            <li>
              <Link href='#'>Whitepaper</Link>
            </li>
            <li>
              <Link href='#'> Blog </Link>
            </li>
            <li>
              <Link href='#'>Activity</Link>
            </li>
          </ul>
        </div>
        <div className='support'>
          <h3>Support</h3>
          <ul>
            <li>
              <Link href='#'>Help & Support</Link>
            </li>
            <li>
              <Link href='#'>Community </Link>
            </li>
            <li>
              <Link href='#'>Author Profile</Link>
            </li>
            <li>
              <Link href='#'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='logo-and-info'>
        <Logo />
        <p>
          About Us Support Whitepaper Blog Activity Help & Support Community
          Author Profile Contact B.Th A Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the
          industry&lsquo;s standard. All rights reserved@2021
        </p>
        <div className='social'></div>
      </div>

      <div className='rights'>
        All rights reserved@{new Date().getFullYear()}
      </div>
    </FooterElement>
  );
}

export default Footer;

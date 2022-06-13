import Link from "next/link";
import { FacebookLogo, InstagramLogo, TwitterLogo } from "phosphor-react";
import React from "react";
import Logo from "../components/Logo";
import { FooterElement } from "../styles/footer";
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
        <div className='social'>
          <FacebookLogo />
          <TwitterLogo />
          <InstagramLogo />
        </div>
      </div>

      <div className='rights'>
        All rights reserved@{new Date().getFullYear()}
      </div>
    </FooterElement>
  );
}

export default Footer;

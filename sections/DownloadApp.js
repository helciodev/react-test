import Image from "next/image";
import React from "react";
import styled from "styled-components";
import cryptoIllustration from "../assets/mobile-crypto-illustration.jpeg";
import SectionText from "../components/SectionText";
const DownloadAppSection = styled.section``;
function DownloadApp() {
  const heading = `
    Available and Download Anytime!
    `;
  const text = `
    A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
A Lorem Ipsum is simply
    `;

  return (
    <DownloadAppSection>
      <div className='crypto-image'>
        <Image src={cryptoIllustration} alt='illustration about crypto' />
      </div>
      <div className='download-app-text-info'>
        <SectionText heading={heading} text={text} />
        <div className='play-google-buttons'>
          <button className='google'></button>
          <button className='play'></button>
        </div>
      </div>
    </DownloadAppSection>
  );
}

export default DownloadApp;

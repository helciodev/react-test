import Image from "next/image";
import React from "react";
import styled from "styled-components";
import cryptoIllustration from "../assets/frame-3";
import SectionText from "../components/SectionText";
import appleLogo from "../assets/apple.png";
import playStoreLogo from "../assets/playstore.png";

const DownloadAppSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .play-google-buttons {
    display: flex;
    gap: 1rem;

    button {
      height: 47.679012298583984px;
      width: 153.25396728515625px;
      left: 24px;
      top: 3154.605224609375px;
      border-radius: 5.108465671539307px;
      border: 1px solid var(--text-color);
      background-color: var(--black);
      padding: 13px 22px;
      cursor: pointer;
      &:hover {
        border: 1px solid #fff;
      }
    }

    .google img {
      max-width: 20px;
      max-height: 22.48px;
    }

    .google,
    .play {
      display: flex;
      align-items: center;
      gap: 8px;

      .get-it-google {
        display: flex;
        flex-direction: column;
        color: #fff;

        & > :first-child {
          margin-bottom: -10px;
        }
      }
      .get-it-apple {
        display: flex;
        flex-direction: column;
        color: #fff;

        & > :first-child {
          margin-bottom: -10px;
          font-size: 10px;
        }
      }
    }
  }
`;
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
          <button className='google'>
            <Image src={playStoreLogo} alt='google play logo' />
            <div className='get-it-google'>
              <p>GET IT ON</p>
              <p>Google Play</p>
            </div>
          </button>
          <button className='play'>
            <Image src={appleLogo} alt='apple logo' />
            <div className='get-it-apple'>
              <p>Download on the</p>
              <p>App Store</p>
            </div>
          </button>
        </div>
      </div>
    </DownloadAppSection>
  );
}

export default DownloadApp;

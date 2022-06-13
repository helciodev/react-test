import Image from "next/image";
import React from "react";
import styled from "styled-components";
import SectionText from "../components/SectionText";
import cryptoAndPc from "../assets/frame-2.png";

const ChooseAndConvertSection = styled.section`
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .choose-and-convert-img {
    align-self: flex-start;
    margin-bottom: 7rem;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    height: 206px;
    z-index: 1;
    img {
      z-index: 3;
      height: 100px;
    }
  }
  button {
    height: 56px;
    width: 327px;
    border-radius: 5px;
    padding: 24px, 48px, 24px, 48px;
    outline: none;
    border: 1px solid var(--call-to-action);
    color: var(--call-to-action);
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.016em;
    text-align: center;
    transition: all 0.2s ease-in;
    cursor: pointer;
  }

  button:hover {
    background-color: var(--call-to-action);
    color: #fff;
  }
`;
function ChooseAndCovert() {
  const heading = `
    Choose and Convert your Wallet Anytime!
    `;
  const text = `A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
A Lorem Ipsum is simply`;

  return (
    <ChooseAndConvertSection>
      <div className='choose-and-convert-img'>
        <Image
          src={cryptoAndPc}
          alt='a computer illustrating making money online'
        />
      </div>

      <div className='choose-and-convert-text-info'>
        <SectionText heading={heading} text={text} />

        <button>Choose your Wallet</button>
      </div>
    </ChooseAndConvertSection>
  );
}

export default ChooseAndCovert;

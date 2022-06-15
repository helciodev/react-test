import Image from "next/image";
import React from "react";
import styled from "styled-components";
import SectionText from "../components/SectionText";
import cryptoAndPc from "../assets/frame-2.png";

const ChooseAndConvertSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .choose-and-convert-img {
    align-self: flex-start;
    margin-bottom: 43px;
    /* height: 206px; */
  }

  button {
    height: 56px;
    width: 327px;
    border-radius: 5px;
    padding: 24px, 48px, 24px, 48px;
    outline: none;
    border: 1px solid var(--call-to-action);
    background-color: transparent;
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

  .choose-and-convert-text-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 720px) {
    flex-direction: row;
    gap: 4rem;

    align-items: flex-start;

    .choose-and-convert-img {
      width: 665px;
    }

    .choose-and-convert-text-info {
      align-items: flex-start;
      text-align: left;
    }

    button {
      width: 316px;
      height: 70px;
      font-style: normal;
      font-weight: 800;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 0.05em;
      margin-top: 62px;
    }
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
        <SectionText textLarge left heading={heading} text={text} />

        <button>Choose your Wallet</button>
      </div>
    </ChooseAndConvertSection>
  );
}

export default ChooseAndCovert;

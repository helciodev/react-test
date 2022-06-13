import Image from "next/image";
import React from "react";
import styled from "styled-components";
import SectionText from "../components/SectionText";
import cryptoAndPc from "../assets/crypto-and-pc.png";
import pattern from "../assets/pattern-background.png";

const ChooseAndConvertSection = styled.section`
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .choose-and-convert-img {
    position: relative;
    background-image: url(${pattern});
    background-repeat: no-repeat;
    background-color: green;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    height: 206px;
    z-index: 1;
    img {
      z-index: 3;
      height: 100px;
    }
    .glass {
      position: absolute;
      z-index: 2;
    }

    .glass {
      width: 300px;
      height: 300px;
      border-radius: 150px;
      backdrop-filter: blur(18px) saturate(180%);
      -webkit-backdrop-filter: blur(18px) saturate(180%);
      background-color: rgba(213, 216, 222, 0.36);
      border: 1px solid rgba(255, 255, 255, 0.125);
      top: -28px;
      right: 310px;
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
        <div className='glass'></div>

        <Image
          src={cryptoAndPc}
          alt='a computer illustrating making money online'
        />
      </div>

      <div className='choose-and-convert-text-info'>
        <SectionText heading={heading} text={text} />
      </div>
    </ChooseAndConvertSection>
  );
}

export default ChooseAndCovert;

import Image from "next/image";
import React from "react";
import styled from "styled-components";
import SectionText from "../components/SectionText";
import cryptoAndPc from "../assets/computer-and-crypto.jpeg";

const ChooseAndConvertSection = styled.section`
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;

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
      </div>
    </ChooseAndConvertSection>
  );
}

export default ChooseAndCovert;

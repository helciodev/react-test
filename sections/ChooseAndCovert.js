import React from "react";
import styled from "styled-components";
import SectionText from "../components/SectionText";

const ChooseAndConvertSection = styled.section``;
function ChooseAndCovert() {
  const heading = `
    Choose and Convert your Wallet Anytime!
    `;
  const text = `A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
A Lorem Ipsum is simply`;

  return (
    <ChooseAndConvertSection>
      <div className='choose-and-convert-img'></div>

      <div className='choose-and-convert-text-info'>
        <SectionText heading={heading} text={text} />
      </div>
    </ChooseAndConvertSection>
  );
}

export default ChooseAndCovert;

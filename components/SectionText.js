import { TextAa } from "phosphor-react";
import React from "react";
import styled, { css } from "styled-components";
const InfoWrapper = styled.div`
  text-align: center;
  h2 {
    color: var(--black);
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    letter-spacing: 0.016em;
    text-align: center;
  }

  p {
    color: var(--text-color);
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0.016em;
    text-align: center;
  }

  @media screen and (min-width: 720px) {
    display: grid;
    place-content: center;
    h2 {
      font-size: 48px;
      font-weight: 700;
      line-height: 72px;
      letter-spacing: 0.016em;
      text-align: center;
      width: 590px;
      height: 144px;
    }

    p {
      font-size: 20px;
      font-weight: 500;
      line-height: 30px;
      letter-spacing: 0.016em;
      text-align: left;
      width: 581px;
      height: 160px;
      margin-top: 24px;
    }
  }
`;

function SectionText({ text, heading, white, left }) {
  const textLarge = `A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s, when an unknown.
  A Lorem Ipsum is simply dummy text of the printing and typesetting industry. `;
  const textSmall = `A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard.`;
  return (
    <InfoWrapper>
      <h2
        style={{ color: white ? "#ffff" : "", textAlign: left ? "left" : "" }}
      >
        {heading}
      </h2>
      <p style={{ color: white ? "#BDBDBD" : "" }}>
        {textLarge ? textLarge : textSmall ? textSmall : text}
      </p>
    </InfoWrapper>
  );
}

export default SectionText;

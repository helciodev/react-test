import React from "react";
import styled from "styled-components";
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
    }

    p {
      font-size: 20px;
      font-weight: 500;
      line-height: 30px;
      letter-spacing: 0.016em;
      text-align: center;
      width: 654px;
      margin-top: 24px;
    }
  }
`;
function SectionText({ text, heading, white }) {
  return (
    <InfoWrapper>
      <h2 style={{ color: white ? "#ffff" : "" }}>{heading}</h2>
      <p style={{ color: white ? "#BDBDBD" : "" }}>{text}</p>
    </InfoWrapper>
  );
}

export default SectionText;

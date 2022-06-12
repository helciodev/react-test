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
  }
`;
function SectionText() {
  return (
    <InfoWrapper>
      <h2>
        Save Time and Start <span>Digital </span> Wallet!
      </h2>
      <p>
        A Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s{" "}
      </p>
    </InfoWrapper>
  );
}

export default SectionText;

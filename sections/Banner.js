import React from "react";
import styled from "styled-components";

const BannerSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem 3rem;
  .info {
    text-align: center;
    h2 {
      color: var(--black);
      font-weight: 700;
      line-height: 38px;
      letter-spacing: 1.6;
    }

    p {
      color: var(--text-color);
    }
  }
`;

function Banner() {
  return (
    <BannerSection>
      <div className='info'>
        <h2>
          Save Time and Start <span>Digital </span> Wallet!
        </h2>
        <p>
          A Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s{" "}
        </p>
      </div>
    </BannerSection>
  );
}

export default Banner;

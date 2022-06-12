import Image from "next/image";
import React from "react";
import styled from "styled-components";
import mobileCrypto from "../assets/mobile-crypto.png";
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

  .mobile-crypto {
    display: flex;
    position: relative;
    justify-content: flex-end;

    img {
      position: absolute;
    }

    .green-pattern-bg {
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
      <div className='mobile-crypto'>
        <Image
          src={mobileCrypto}
          alt='mobile phone illustrating crypto currency'
        />
        <div className='green-pattern-bg'></div>
      </div>
    </BannerSection>
  );
}

export default Banner;

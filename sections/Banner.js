import Image from "next/image";
import React from "react";
import Button from "../components/Button";
import styled from "styled-components";
import mobileCrypto from "../assets/mobile-crypto.png";
import pattern from "../assets/pattern-background.png";
import videoPlayer from "../assets/play-circle.png";
import coinbase from "../assets/coinbase.png";
import blockChain from "../assets/block-chain.png";
import bitMex from "../assets/bitmex.png";
import binance from "../assets/binance.png";

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
      /* position: absolute; */
      top: 10px;
      /* right: 0; */
    }
    .green-pattern-bg {
      width: 200px;
      height: 100px;
      /* background-image: url(${pattern}); */
      background: #236e57 url(${pattern});
      border-top-left-radius: 100px;
      border-bottom-left-radius: 100px;
    }
  }

  .call-to-action {
    padding: 1rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .video {
      display: flex;
      gap: 9px;
    }
  }

  .users-and-features {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    text-align: center;
    gap: 3rem;

    .users,
    .features {
      display: flex;
      flex-direction: column;
    }

    .users p:first-of-type,
    .features p:first-of-type {
      font-weight: 700;
      color: var(--th-green);
      font-size: 24px;
      font-weight: 700;
      line-height: 36px;
      letter-spacing: 0.016em;
      text-align: center;
    }

    .users p:last-of-type,
    .features p:last-of-type {
      color: var(--text-color);
      font-size: 12px;
      font-weight: 500;
      line-height: 18px;
      letter-spacing: 0.016em;
      text-align: left;
    }
  }

  .recommended {
    position: relative;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.016em;
    text-align: center;
    color: var(--th-green);
  }

  .recommended::after,
  .recommended::before {
    content: "";
    height: 1px;
    width: 59px;
    background-color: var(--call-to-action);
    top: 13px;
    position: absolute;
  }
  .recommended::after {
    right: -70px;
  }
  .recommended::before {
    left: -70px;
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

      <div className='call-to-action'>
        <div className='video'>
          <Image
            className='player-button'
            src={videoPlayer}
            alt='video player icon'
          />
          <h3>Watch Video</h3>
        </div>
        <Button text='Get started' />

        <div className='users-and-features'>
          <div className='users'>
            <p>19k+</p>
            <p>Active Users</p>
          </div>
          <div className='features'>
            <p>20+</p>
            <p>New Features</p>
          </div>
        </div>
        <div className='recommended'>recommended by</div>
        <div className='brands'>
          <Image src={coinbase} alt='coinbase logo' />
          <Image src={blockChain} alt='blockchain logo' />
          <Image src={binance} alt='binance logo' />
          <Image src={bitMex} alt='bitmex logo' />
        </div>
      </div>
    </BannerSection>
  );
}

export default Banner;

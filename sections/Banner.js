import Image from "next/image";
import React from "react";
import Button from "../components/Button";
import { BannerSection } from "../styles/banner";
import mobileCrypto from "../assets/frame-1.png";

import videoPlayer from "../assets/play-circle.png";
import coinbase from "../assets/coinbase.svg";
import blockChain from "../assets/blockchain.svg";
import bitMex from "../assets/bitmex.svg";
import binance from "../assets/binance.svg";

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

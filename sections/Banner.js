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
        <p className='details'>
          A Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s{" "}
        </p>

        <div className='video-medium'>
          <div className='video-medium-top'>
            <button className='player-button-medium'>
              <Image src={videoPlayer} alt='video player icon' />
            </button>
            <button className='watch-video-text-medium'>Watch Video</button>
          </div>
          <button className='get-started-medium'> Get Started</button>
        </div>
        <div className='features-and-users-medium'>
          <div className='users-medium'>
            <p className='users-total'>19k+</p>
            <p className='active-medium'>Active Users</p>
          </div>
          <div className='features-medium'>
            <p className='features-total'>20+</p>
            <p className='new-medium'>New Features</p>
          </div>
        </div>
      </div>
      <div className='mobile-crypto'>
        <Image
          src={mobileCrypto}
          alt='mobile phone illustrating crypto currency'
        />
      </div>

      <div className='call-to-action'>
        <div className='video'>
          <button className='player-button'>
            <Image src={videoPlayer} alt='video player icon' />
          </button>
          <button className='watch-video-text'>Watch Video</button>
          <button className='get-started'> Get Started</button>
        </div>

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
          <div className='brand-img'>
            <Image src={coinbase} alt='coinbase logo' />
          </div>
          <div className='brand-img'>
            <Image
              className='brand-img'
              src={blockChain}
              alt='blockchain logo'
            />
          </div>
          <div className='brand-img'>
            <Image className='brand-img' src={binance} alt='binance logo' />
          </div>
          <div className='brand-img'>
            <Image className='brand-img' src={bitMex} alt='bitmex logo' />
          </div>
        </div>
      </div>
    </BannerSection>
  );
}

export default Banner;

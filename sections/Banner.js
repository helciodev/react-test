import Image from "next/image";
import React from "react";
import Button from "../components/Button";
import styled from "styled-components";
import mobileCrypto from "../assets/mobile-crypto.png";
import pattern from "../assets/pattern-background.png";
import videoPlayer from "../assets/play-circle.png";

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
      </div>
    </BannerSection>
  );
}

export default Banner;

import Image from "next/image";
import React from "react";
import styled from "styled-components";

const CardElement = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 16px;
  height: 350px;
  transition: all 0.3s ease-in-out;

  .pic-container {
    border-radius: 10px;
    display: grid;
    place-content: center;
    padding: 16px;
    width: 64px;
    height: 64px;
  }

  .card-title {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.016em;
    text-align: left;
    width: 129px;
    text-align: center;
    margin-bottom: 2px;
  }

  .card-details {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.016em;
    text-align: center;
    color: var(--text-color);
    width: 114px;
    height: 64px;
    -webkit-line-clamp: 3;
  }
  &:hover {
    background: linear-gradient(
      156.79deg,
      rgba(255, 248, 241, 0.45) 0.44%,
      #fff8f2 61.76%,
      #e0fbe5 134.86%
    );
    box-shadow: 25px 25px 100px rgba(166, 161, 157, 0.2);
    border-radius: 12px;
    cursor: pointer;
  }

  @media screen and (min-width: 720px) {
    .card-title {
      font-size: 24px;
      font-weight: 700;
      line-height: 36px;
      letter-spacing: 0.016em;
      text-align: center;
      width: 220px;
    }

    .card-details {
      font-size: 18px;
      font-weight: 400;
      line-height: 27px;
      letter-spacing: 0.016em;
      text-align: center;
      width: 317.5px;
    }
    .pic-container {
      width: 84px;
      height: 77px;
      border-radius: 12px;
    }
  }
`;
function Card({ bgColor, img, title, details, altText, active }) {
  return (
    <CardElement className={active ? "active" : ""}>
      <div style={{ backgroundColor: bgColor }} className='pic-container'>
        <Image src={img} alt={altText} />
      </div>
      <h3 className='card-title'>{title}</h3>
      <p className='card-details'>{details}</p>
    </CardElement>
  );
}

export default Card;

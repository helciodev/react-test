import Image from "next/image";
import React from "react";
import styled from "styled-components";

const CardElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px;
  gap: 16px;

  .active {
    background: linear-gradient(
      156.79deg,
      rgba(255, 248, 241, 0.45) 0.44%,
      #fff8f2 61.76%,
      #e0fbe5 134.86%
    );
  }

  box-shadow: 25px 25px 100px rgba(166, 161, 157, 0.2);
  border-radius: 12px;
`;
function Card({ bgColor, img, title, details }) {
  return (
    <CardElement>
      <Image style={{ backgroundColor: bgColor }} src={img} alt={altText} />
      <p>{title}</p>
      <p>{details}</p>
    </CardElement>
  );
}

export default Card;

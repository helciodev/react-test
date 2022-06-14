import React from "react";
import styled from "styled-components";

const ButtonElement = styled.button`
  @media screen and (min-width: 51px) {
    & {
      display: none;
    }
  }
  @media screen and (min-width: 720px) {
    & {
      display: flex;
    }
  }

  color: var(--white);
  background-color: var(--call-to-action);
  outline: none;
  border: none;
  padding: 24px 36px;
  background-color: #f05830;
  border-radius: 5px;
  color: #fff;
  width: 153px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0.016em;
  text-align: left;

  &:hover {
    background-color: #cc4520;
  }
`;
function Button({ text }) {
  return <ButtonElement>{text}</ButtonElement>;
}

export default Button;

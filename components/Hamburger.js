import React from "react";
import styled from "styled-components";

const HamburgerElement = styled.div`
  @media screen and (min-width: 720px) {
    & {
      display: none;
    }
  }
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: end;
  cursor: pointer;

  &:hover > .outer-line:first-of-type {
    transform: translateY(-3px);
  }

  &:hover > .outer-line:last-of-type {
    transform: translateY(3px);
  }

  .outer-line {
    width: 18.56px;
    height: 2.5px;
    background-color: green;
    transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .outer-line,
  .inner-line {
    border-radius: 5px;
    height: 2.5px;
  }
  .outer-line:first-of-type {
    margin-bottom: 5.8px;
  }

  .line {
    display: flex;
    margin-bottom: 4px;
    width: 28px;
    height: 4px;
    justify-content: space-between;
  }

  .inner-line:first-of-type {
    width: 18px;
    height: 3.5px;
    background-color: green;
  }

  .inner-line:nth-of-type(2) {
    background-color: red;
    height: 3.5px;
    width: 6.64px;
  }
`;
function Hamburger() {
  return (
    <HamburgerElement className='hamburger'>
      <div className='outer-line'></div>
      <div className='line'>
        <div className='inner-line'></div>
        <div className='inner-line'></div>
      </div>
      <div className='outer-line'></div>
    </HamburgerElement>
  );
}

export default Hamburger;

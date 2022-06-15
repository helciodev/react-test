import React from "react";
import styled from "styled-components";
const ThLogo = styled.div`
  h1 {
    font-weight: 700;
    color: var(--th-green);
    font-size: 1.5rem;
    line-height: 1.8rem;
    display: flex;
    align-items: baseline;
    cursor: pointer;

    .red-dot {
      background-color: var(--call-to-action);
      height: 4px;
      width: 4px;
      border-radius: 50px;
      color: transparent;
    }
  }
`;
function Logo({ onClick }) {
  return (
    <ThLogo onClick={onClick}>
      <h1>
        B<div className='red-dot'></div>Th
      </h1>
    </ThLogo>
  );
}

export default Logo;

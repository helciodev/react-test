import styled from "styled-components";

export const BannerSection = styled.section`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: flex-start; */

  .info {
    text-align: center;
    h2 {
      color: var(--black);
      font-weight: 700;
      font-size: 32px;
      line-height: 38px;
      letter-spacing: 0.016em;
      text-align: center;
    }

    p {
      color: var(--text-color);
      font-size: 14px;
      font-weight: 500;
      line-height: 21px;
      letter-spacing: 0.016em;
      text-align: center;
    }
  }

  /* /* .mobile-crypto {
    display: flex;
    position: relative;
    justify-content: flex-end;

    img {
      position: absolute;
     
      
    } */
  .green-pattern-bg {
    width: 200px;
    height: 100px;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
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
    margin-top: 45px;
    margin-bottom: 28px;
    text-transform: capitalize;
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

  .brands {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
`;

import styled from "styled-components";

export const BannerSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .info {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 32px;

    h2 {
      color: var(--black);
      font-weight: 700;
      font-size: 32px;
      line-height: 38px;
      letter-spacing: 0.016em;
      text-align: center;
      width: 327px;
    }

    p.details {
      color: var(--text-color);
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 150%;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: 0.016em;
      width: 280px;
      margin-top: -8px;
    }
  }

  .call-to-action {
    padding: 1rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .video {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;

      .get-started {
        flex-grow: 1;
      }

      .player-button,
      .watch-video-text {
        background-color: transparent;
        border: none;
        cursor: pointer;
      }

      .watch-video-text {
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0.016em;
        text-align: left;
      }

      @media screen and (min-width: 720px) {
        & {
          display: none;
        }
      }
    }

    .get-started {
      height: 56px;
      width: 327px;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 24px 48px;
      gap: 8px;
      outline: none;
      border: none;
      width: 327px;
      height: 56px;
      color: #fff;
      background: var(--call-to-action);
      border-radius: 5px;
      cursor: pointer;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 150%;
      letter-spacing: 0.016em;

      &:hover {
        background-color: #cc4520;
      }

      /* Inside auto layout */
      flex: none;
      order: 1;
      flex-grow: 0;
    }
  }

  .users-and-features {
    margin-top: 32px;
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
      margin-bottom: 5px;
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

    @media screen and (min-width: 720px) {
      & {
        display: none;
      }
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
    width: 60px;
    background-color: var(--call-to-action);
    top: 13px;
    position: absolute;
  }
  .recommended::after {
    right: -80px;
  }
  .recommended::before {
    left: -80px;
  }

  .brands {
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    flex-wrap: wrap;
    margin-top: 26px;
    margin-bottom: 45px;
    .brand-img {
      /* display: block; */
      /* border: 1px solid red; */
      width: 40%;
    }
  }

  @media screen and (min-width: 720px) {
    & {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;

      .mobile-crypto {
        width: 655px;
      }

      .info {
        margin-left: 20px;
        width: 568px;
        align-items: flex-start;

        h2 {
          font-size: 56px;
          font-weight: 700;
          line-height: 73px;
          letter-spacing: 0.016em;
          text-align: left;
          width: 558px;
        }

        p.details {
          font-size: 20px;
          font-weight: 500;
          line-height: 30px;
          letter-spacing: 0.016em;
          text-align: left;
          width: 558px;
          text-align: justify;
        }
      }

      .recommended {
        flex-grow: 1;
      }

      .video-medium {
        display: flex;
        flex-direction: row-reverse;
        gap: 5px;
        align-items: center;

        .player-button-medium,
        .watch-video-text-medium {
          background-color: transparent;
          border: none;
          cursor: pointer;
        }

        .video-medium-top {
          display: flex;
          align-items: center;

          .watch-video-text-medium {
            font-size: 18px;
            font-weight: 700;
            line-height: 27px;
            letter-spacing: 0.016em;
            text-align: left;
          }
        }

        .get-started-medium {
          height: 56px;
          width: 227px;
          border-radius: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 24px 48px;
          gap: 8px;
          outline: none;
          border: none;
          width: 227px;
          height: 56px;
          color: #fff;
          background: var(--call-to-action);
          border-radius: 5px;
          cursor: pointer;
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 150%;
          letter-spacing: 0.016em;

          &:hover {
            background-color: #cc4520;
          }
        }
      }
    }

    .features-and-users-medium {
      display: flex;
      gap: 3rem;
      .users-medium,
      .features-medium {
        display: grid;
        place-content: center;

        .users-total,
        .features-total {
          font-size: 40px;
          font-weight: 700;
          line-height: 60px;
          letter-spacing: 0.016em;
          color: var(--th-green);
          margin-bottom: 0;
        }

        .active-medium,
        .new-medium {
          font-size: 18px;
          font-weight: 500;
          line-height: 32px;
          letter-spacing: 0.016em;
          color: var(--text-color);
        }
      }
    }
    .recommended {
      border: 1px solid red;
    }
  }

  @media screen and (max-width: 500px) {
    .info {
      .features-and-users-medium,
      .video-medium {
        display: none;
      }
    }
  }
`;

import styled from "styled-components";

export const FooterElement = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  .rights {
    color: var(--text-color);
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.016em;
    text-align: center;
  }

  .about-and-support {
    display: flex;
    gap: 80px;
    text-align: center;

    .about {
      display: flex;
      flex-direction: column;
      align-items: center;

      text-align: center;
    }

    ul {
      list-style: none;
      margin-top: -5px;
      display: flex;
      flex-direction: column;
      align-items: center;

      li {
        margin-right: 2rem;
      }
      a {
        color: var(--text-color);
        text-decoration: none;
        &:hover {
          color: #999;
        }
      }
    }
  }
  .logo-and-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  .logo-and-info p {
    //styleName: Body Text/Small/Regular;
    color: var(--text-color);
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.016em;
    text-align: center;
  }

  .social {
    display: flex;
    gap: 0.4rem;
  }
`;

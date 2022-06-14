import React from "react";
import styled from "styled-components";
import SectionText from "../components/SectionText";
const NewsLetterSection = styled.section`
  background-color: var(--th-green);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 15px;
  margin-top: 2rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    input {
      background-color: transparent;
      outline: none;
      border: 1px solid var(--text-color);
      height: 56px;
      width: 327px;
      color: wheat;
      border-radius: 5px;
      padding: 24px, 48px, 24px, 24px;
    }
    button {
      height: 56px;
      width: 195px;
      font-size: 16px;
      font-weight: 800;
      border-radius: 5px;
      padding: 24px, 48px, 24px, 48px;
      background-color: var(--call-to-action);
      outline: none;
      border: none;
      color: #fff;
      text-align: center;
    }
  }

  @media screen and (min-width: 720px) {
    form {
      flex-direction: row;
      gap: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      button {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
`;

function Newsletter() {
  const heading = "Ready to get updated?";
  const text = `A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's`;
  function handleForm(e) {
    e.preventDefault();
  }
  return (
    <NewsLetterSection>
      <SectionText white={true} heading={heading} text={text} />

      <form onSubmit={handleForm}>
        <input type='text' placeholder='Email Address' />
        <button type=''> submit</button>
      </form>
    </NewsLetterSection>
  );
}

export default Newsletter;

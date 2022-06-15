import React from "react";
import styled from "styled-components";
import SectionText from "../components/SectionText";
import { cardElements } from "../card-elements/cardElements";
import Card from "../components/Card";
const WhyUsSection = styled.section`
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    & > * {
      width: 50%;
    }

    @media screen and (min-width: 720px) {
      /* padding-left: 60px;
      padding-right: 60px; */
      & > * {
        width: 380px;
      }
    }
  }
`;
function WhyUs() {
  const headingText = "Why Choose Us";

  const text = `A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s.`;
  return (
    <WhyUsSection>
      <SectionText center heading={headingText} text={text} />
      <div className='card-container'>
        {cardElements.map((element) => {
          return <Card key={element.bgColor} {...element} />;
        })}
      </div>
    </WhyUsSection>
  );
}

export default WhyUs;

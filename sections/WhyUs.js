import React from "react";
import styled from "styled-components";
import SectionText from "../components/SectionText";
const WhyUsSection = styled.section``;
function WhyUs() {
  const headingText = "Why Choose Us";

  const text = `A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s.`;
  return (
    <WhyUsSection>
      <SectionText heading={headingText} text={text} />
    </WhyUsSection>
  );
}

export default WhyUs;

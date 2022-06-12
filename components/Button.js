import React from "react";
const ButtonElement = styled.button`
  border-radius: 5px;
  color: var(--white);
  outline: none;
  border: none;
  background-color: var(--call-to-action);
`;
function Button({ text }) {
  return <ButtonElement>{text}</ButtonElement>;
}

export default Button;

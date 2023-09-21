import { styled } from "styled-components";

const StyleBlock = styled.h1`
  color: #292b30;
  text-align: left;
  font-family: Rubik;
  font-size: 22px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const StyledInput = styled.input`
  color: rgba(41, 43, 48, 0.50);
  text-align: left;
  font-family: Rubik;
  font-size: 22px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  border: none;
  border-bottom: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;
`;

function Input() {
  return (
    <div>
      <StyleBlock>Email Address</StyleBlock>
      <StyledInput type="email" placeholder="Enter your email" required />

      <StyleBlock>Username</StyleBlock>
      <StyledInput type="text" placeholder="Enter your username" required />

      <StyleBlock>Password</StyleBlock>
      <StyledInput type="password" placeholder="Choose your password" required/>
    </div>
  );
}

export default Input;

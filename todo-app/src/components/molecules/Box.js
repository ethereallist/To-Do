//Molecules
import { styled } from "styled-components";
import ButtonCreate from "../atoms/ButtonCreate";
import Title from "../atoms/Title";
import SignIn from "../atoms/SignIn";
import Input from "../atoms/Input";

const Box1 = styled.div`
  
  border: 1px solid rgba(0, 0, 0, 0.5);
  background: rgba(240, 240, 243, 0.95);
  border-radius: 21.354px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Box = () => {
    // Use Title and Wrapper like any other React component – except they're styled!
    return (
        <Box1>
            <Title></Title>
            <Input></Input>
            <ButtonCreate>  
            </ButtonCreate>
            <SignIn></SignIn>
        </Box1>
    );
}
export default Box
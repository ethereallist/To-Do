//Molecules
import { styled } from "styled-components";
import ButtonCreate from "../atoms/ButtonCreate";

const Box1 = styled.div`
width: 60%;
height: 50%;
flex-shrink: 0;
background-color: #1C1C1C;
border-radius: 10%
`
const Box = () => {
    // Use Title and Wrapper like any other React component – except they're styled!
    return (
        <Box1>
            <ButtonCreate>  
            </ButtonCreate>
            
        </Box1>
    );
}
export default Box
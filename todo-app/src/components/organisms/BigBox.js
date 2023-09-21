//Organism
import { styled } from "styled-components";
import Box from "../molecules/Box";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
`;


const BigBox = () => {
    // Use Title and Wrapper like any other React component – except they're styled!
    return (
        <Container>
        <Box> 
        </Box>
        </Container>
    );
}
export default BigBox
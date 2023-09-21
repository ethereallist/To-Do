import { styled } from "styled-components"
import WelcomeTo from "../molecules/WelcomeTo";
import Minimalist from "../molecules/Minimalist";

const StyledTemplate = styled.div `
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100vw;
    height: 100vh;
    align-content: center;
`

function Box() {
    return(
        <StyledTemplate>
        <WelcomeTo />
        <Minimalist />
        </StyledTemplate>
    ) 
}

export default Box; 
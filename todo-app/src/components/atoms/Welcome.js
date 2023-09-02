import { styled } from "styled-components"

const StyledWelcome = styled.h2 `
    color: #292B30;
    font-size: 1.3em;
    font-weight: 300;
    letter-spacing: 1px;
    margin: 0.5em;
`

function Welcome() {
    return(
        <StyledWelcome>Welcome to</StyledWelcome>
    ) 
}

export default Welcome; 
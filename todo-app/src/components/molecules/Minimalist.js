import { styled } from "styled-components";

const StyledMinimal = styled.h1`
    color: #292B30;
    font-size: 2.5em;
    font-weight: 200;
    margin-bottom: 0px;
    margin-block-start: 0px;
`

const StyledList = styled.h1`
    color: #292B30;
    font-size: 2.5em;
    font-weight: 600;
    margin-bottom: 0px;
    margin-top: 0px
`

const StyledMinimalistBox = styled.div`
    display:block;
`

function Minimalist() {
    return(
        <StyledMinimalistBox>
        <StyledMinimal>Minima</StyledMinimal>
        <StyledList>-list</StyledList>
        </StyledMinimalistBox>
    )
}  

export default Minimalist;
import { styled } from "styled-components"

const StyledTitle = styled.h1`
    color: #292B30;
    text-align: right;
    font-family: Rubik;
    font-size: 25px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`

function Title() {
    return (
        <div>
            <StyledTitle>
            Organice everything with minima-list!
            </StyledTitle>
        </div>
    )
}

export default Title
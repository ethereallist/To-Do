import { styled } from "styled-components"

const StyledDivider = styled.hr `
    color: #292B30;
    width: 15%;
`

function Divider() {
    return(
        <StyledDivider></StyledDivider>
    )
}

export default Divider;
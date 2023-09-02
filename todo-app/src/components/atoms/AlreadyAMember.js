import { styled } from "styled-components";

const StyledAlreadyAMember = styled.p `
    color: #292B30;
    font-size: 10px;
`

function AlreadyAMember() {
    return (
        <StyledAlreadyAMember onClick={() => console.log("Hola")}>Already a member? Sign in</StyledAlreadyAMember>
    )
}

export default AlreadyAMember;

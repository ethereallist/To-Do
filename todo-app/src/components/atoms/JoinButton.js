import { styled } from "styled-components"

const StyledJoinButton = styled.button`
    padding: 10px;
    font-size: 0.5em;
    color: #292B30;
    width: 7rem;
    border: 0px solid;
    font-weight: 100;
    border-radius: 78px;
    background: #ebebeb;
    box-shadow:  3px 3px 8px #bebebe,
                 -3px -3px 8px #ffffff;
`

function JoinButton() {
    return (
        <StyledJoinButton>Join for free</StyledJoinButton>
    )
}

export default JoinButton;

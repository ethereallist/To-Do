import { styled } from "styled-components";
import Welcome from "../atoms/Welcome";
import Divider from "../atoms/Divider";
import JoinButton from "../atoms/JoinButton";
import AlreadyAMember from "../atoms/AlreadyAMember";

const StyledWelcomeTo = styled.div `
    display: block;
`

function WelcomeTo() {
    return(
        <StyledWelcomeTo>
        <Welcome />
        <Divider />
        <JoinButton />
        <AlreadyAMember />
        </StyledWelcomeTo>
    )
}

export default WelcomeTo; 
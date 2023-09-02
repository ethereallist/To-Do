import Welcome from "../atoms/Welcome";
import Divider from "../atoms/Divider";
import JoinButton from "../atoms/JoinButton";
import AlreadyAMember from "../atoms/AlreadyAMember";

function WelcomeTo() {
    return(
        <>
        <Welcome />
        <Divider />
        <JoinButton />
        <AlreadyAMember />
        </>
    )
}

export default WelcomeTo; 
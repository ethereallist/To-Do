import { styled } from "styled-components"

const StyledSignIn = styled.p`
color: #292B30;
font-family: Rubik;
font-size: 22px;
font-style: normal;
font-weight: 300;
line-height: normal;
text-decoration-line: underline;
`
function SignIn() {
    return (
        <div>

            <StyledSignIn>Or sign in</StyledSignIn>

        </div>
    )
}

export default SignIn
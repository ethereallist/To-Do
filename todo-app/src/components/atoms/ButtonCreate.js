import { styled } from "styled-components"

const Button = styled.button`
width: 10%;
height: 5%;
flex-shrink: 0;
background-color: blue;
border-radius: 10%
`
const ButtonText = styled.span`
color: rgba(255, 255, 255, 0.70);
text-align: right;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

function ButtonCreate() {
    return (
        <div>
            <Button>
            <ButtonText>Create free account</ButtonText>
            </Button>
        </div>
    )
}

export default ButtonCreate
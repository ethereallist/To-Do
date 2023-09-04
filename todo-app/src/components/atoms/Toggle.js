import { styled } from "styled-components";

const StyledToggle = styled.div  `
border-radius: 25px;
border: 0.3px solid #D2E0EC;
background: var(--nue-white-1, #F0F0F3);
box-shadow: 1.5px 1.5px 3px 0px rgba(174, 174, 192, 0.40), -1px -1px 3px 0px #FFF;
width:100px;
height:50px;

`
const StyledToggleIn = styled.div `
border-radius: 25px;
background: #E4E4E4;
box-shadow: 1px 1px 2px 0px rgba(174, 174, 192, 0.20) inset, -1px -1px 1px 0px rgba(255, 255, 255, 0.70) inset;
width: 90px;
height: 48px;

`

const StyledBall = styled.div`
width:40px;
height: 40px;
border-radius: 50%;
border: 0px;
background: linear-gradient(145deg, #ffffff, #e6e6e6);
box-shadow:  20px 20px 60px #d9d9d9,
             -20px -20px 60px #ffffff;
`

function Toggle() {
    return (
        <>
        <StyledToggle> <StyledToggleIn><StyledBall/></StyledToggleIn></StyledToggle>
        </>
    )
}

export default Toggle;
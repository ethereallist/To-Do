import { styled } from "styled-components"

const Button = styled.button`
  width: 150px; 
  height: 40px; 
  background-color: #292B30; 
  border: none; 
  border-radius: 10px; 
  color: #fff; 
  font-size: 14px; 
  cursor: pointer; 
  transition: background-color 0.3s; 
  margin: 10px; 
  
  &:hover {
    background-color: white; 
    color: black; 
  }
`;

const ButtonText = styled.span`
  font-size: 14px; 
  font-weight: 600; 
  line-height: 1.5; 
    
`;

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
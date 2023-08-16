import { styled } from "styled-components"

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`
// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`
const Button = () => {
    // Use Title and Wrapper like any other React component – except they're styled!
    return (
        <Wrapper>
            <Title>
                Bye World! 
            </Title>
        </Wrapper>
    );
}
export default Button
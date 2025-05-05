import React from "react";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  min-height: calc(100vh - 40px);

  h1 {
    color: red;
  }
`;


const Button = styled.button`
  background-color: #007bff;
  color: ${(props) => props.color};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`

const HoverButton = styled(Button)`
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`
const StylePage = () => {
 return (
    <Container>
      <div>
        <h1>StylePage</h1>
        <Button color="white">Click Me</Button>
        <Button color="red">Click Me</Button>
        <Button color="blue">Click Me</Button>

        <HoverButton color="white">Click Me</HoverButton>
        <HoverButton color="red">Click Me</HoverButton>
        <HoverButton color="blue">Click Me</HoverButton>
      </div>
    </Container>
 )
}

export default StylePage;


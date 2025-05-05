// 这是一个使用styled-components库创建的按钮组件。
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

// 这是什么写法？
// 1. 这是一个使用styled-components库创建的按钮组件。
// 2. styled-components是一个CSS-in-JS库，它允许我们在JavaScript中编写CSS样式。
// 3. 通过styled.button，我们可以创建一个自定义的button元素，并为其添加样式。
// 4. 这个按钮组件的背景颜色为#007bff，文字颜色由props传入的color属性决定。
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


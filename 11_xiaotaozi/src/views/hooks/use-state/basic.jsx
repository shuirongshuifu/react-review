import React from "react";
import { Button, Divider } from "antd";

const UseStateBasic = () => {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  const [count3, setCount3] = React.useState(0);
  const [count4, setCount4] = React.useState(0);

  return (
    <>
      <div>
        <Button onClick={() => setCount(count + 1)}>点击+1</Button>
        <h1>{count}</h1>
      </div>
      <Divider />

      <div>
        <h1>陷阱：错误❌的使用示例</h1>
        <Button
          onClick={() => {
            setCount2(count2 + 1)
            setCount2(count2 + 1)
          }}
        >
          点击+1+1
        </Button>
        <h1>{count2}</h1>
      </div>

      <Divider />

      <div>
        <h1>陷阱：错误❌的使用示例</h1>
        <Button
          onClick={() => {
            setCount3(count3 + 1)

            setTimeout(() => {
              setCount3(count3 + 1)
            }, 500)
          }}
        >
          点击+1+1
        </Button>
        <h1>{count3}</h1>
      </div>

      <Divider />

      <div>
        <h1>正确✅使用示例</h1>
        <Button
          onClick={() => {
            setCount4((count) => count + 1)
            setCount4((count) => count + 1)
          }}
        >
          点击+1+1
        </Button>
        <h1>{count4}</h1>
      </div>

      <Divider />
    </>
  );
};

export default UseStateBasic;
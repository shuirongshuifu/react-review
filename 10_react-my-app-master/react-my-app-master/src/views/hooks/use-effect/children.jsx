import React, { useEffect, memo } from "react";
import { Button, Divider } from 'antd'

const Children = memo(() => {
  const [data, setData] = React.useState(0);
  const [count1, setCount] = React.useState(0);

  console.log('子组件更新了');
  
  useEffect(() => {
    setData((a) => a + 1)

    return () => {
      console.log("useEffect子组件卸载");
    };
  }, []);

  return (
    <div>
      <h2>useEffect子组件更新的次数{data}</h2>
      <Divider />

      <Button onClick={() => setCount(count1 + 1)}>子组件+1</Button>
      <h3>子组件{count1}</h3>
    </div>
  );
});

export default Children;
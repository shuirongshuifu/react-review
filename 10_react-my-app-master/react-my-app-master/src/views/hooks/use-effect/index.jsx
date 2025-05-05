import React, { useState, useEffect } from "react";
import { Button, Divider } from 'antd'
import Children from "./children";

const UseEffectPage = () => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [data, setData] = useState(0);

    console.log('父组件更新了');

    useEffect(() => {
      setData((a) => a + 1)
    }, [])

    return (
        <>
          <h1>基本使用</h1>
          <Button onClick={() => setCount(count + 1)}>点击更改值count</Button>
          <h3>{count}</h3>

          <Button onClick={() => setCount1(count1 + 1)}>点击更改值count1</Button>
          <h3>{count1}</h3>

          <h2>useEffect的触发次数： {data}</h2>
          <Divider />
          
          <Children count={count} />
          <Divider />
        </>
    )
};

export default UseEffectPage;
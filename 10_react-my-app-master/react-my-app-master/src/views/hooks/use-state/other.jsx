import React, { useState } from "react";
import { Button, Divider } from "antd";


const useImmer = (initState) => {
  const [state, setState] = useState(initState);

  const setStateImmer = (callback) => {
    const data = typeof state === 'object' ?  { ...state } : state
    if(typeof callback === 'function') {
      callback(data)
    }
    setState(data)
  }
 
  return [state, setStateImmer];
};
const UseStateOther = () => {
    const [data, setData] = useState({
      name: 'zhangsan',
      age: 18
    });

    const [data2, setData2] = useImmer({
      name: 'zhangsan',
      age: 18
    });

    return (
        <>
        <div>
          <h1> Object 类型使用示例</h1>
          <Button onClick={() => {
            setData({
              ...data,
              age: data.age + 1
            })
          }}>
            age + 1
          </Button>
          <pre>{JSON.stringify(data,null,2)}</pre>
        </div>

          <Divider />

          <div>
          <h1> Object 简单使用示例</h1>
          <Button onClick={() => {
            setData2((draft) => {
               draft.age++
            })
          }}>
            age + 1
          </Button>
          <pre>{JSON.stringify(data2,null,2)}</pre>
        </div>

          <Divider />
        </>
    )
}


export default UseStateOther;
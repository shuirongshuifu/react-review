import React, { useState } from "react";
import { Button, Divider } from "antd";


const useImmer = (initState) => {
  const [state, setState] = useState(initState);

  // so?我为什么要学这个方法呢？
  // 1. 修改对象属性的时候，不需要手动拷贝对象，直接修改即可
  
  const setStateImmer = (callback) => {
    const data = typeof state === 'object' ?  { ...state } : state
    if(typeof callback === 'function') {
      console.log('callback', callback);
      
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
            console.log('data--1', data);
            
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
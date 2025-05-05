import React, { useContext } from "react";
import { DataContext } from './index'

const OperatorButton = () => {
    const { dispatch } = useContext(DataContext);
    // 4、useContext是一个钩子函数，它可以让我们在函数组件中使用Context对象。
  return (
    <>
    <h1>useContext + useReducer  管理</h1>
      <button onClick={() => {
        dispatch({ type: 'incremented_age' })
      }}>
        增加年龄
      </button>
      <button onClick={() => {
        dispatch({ type: 'decremented_age' })
      }}>
        减少年龄
      </button>
      <button onClick={() => {
        dispatch({ type: 'change_name' })
      }}>
        更改名字
      </button>
    </>
  )

};


export default OperatorButton;
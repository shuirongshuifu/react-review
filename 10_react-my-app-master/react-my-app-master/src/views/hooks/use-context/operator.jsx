import React, { useContext } from "react";
import { DataContext } from './index'

const OperatorButton = () => {
    const { dispatch } = useContext(DataContext);
    
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
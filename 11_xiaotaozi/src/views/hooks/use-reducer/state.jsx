import { useState } from 'react';


export default function StateCounter() {
  const [data, setData] = useState({ age: 42, name: 'John' });

  const incremented = () => {
    setData({
        ...data,
        age: data.age + 1
    })
  }
  const decremented = () => {
    setData({
        ...data,
        age: data.age - 1
    })
  }
  const change = () => {
    setData({
        ...data,
        name: '张三'
    })
  }

  return (
    <>
    <h1>useState 管理数据</h1>
      <button onClick={incremented}>
        增加年龄
      </button>
      <button onClick={decremented}>
        减少年龄
      </button>
      <button onClick={change}>
        更改名字
      </button>
      <p>Hello{data.name}! You are {data.age}.</p>
    </>
  );
}

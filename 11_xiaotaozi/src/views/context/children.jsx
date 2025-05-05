import React, { useContext } from 'react';
import { DataContext } from './index'
// useContext是什么？
// 1. useContext是React提供的一个钩子函数，用于在函数组件中访问Context对象。
// 2. useContext接收一个Context对象（由React.createContext()创建）并返回该Context的当前值。
// 3. 当前的Context值由上层组件中距离当前组件最近的<Context.Provider>的value prop决定。
// 4. 如果没有上层的<Context.Provider>，则返回createContext()时传入的默认值。
// 5. useContext是一个钩子函数，它可以让我们在函数组件中使用Context对象。
const Children = () => {
  const context = useContext(DataContext);
  console.log('context', context);

  return (
    <div>
      <h1>{context.name}</h1>
      <h1>{context.person.name}</h1>
      <button onClick={() => { context.setName('李四') }}> 点击触发【子传父】</button>
      <button onClick={() => { context.setPerson({ name: '王五', age: 20 }) }}> 点击触发【子传父】</button>
    </div>
  );
};


export default Children;
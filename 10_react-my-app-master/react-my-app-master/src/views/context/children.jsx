import React, { useContext } from 'react';
import { DataContext } from './index'

const Children = () => {
  const context = useContext(DataContext);

  return (
    <div>
      <h1>{ context.name }</h1>
      <button onClick={() => {context.setName('李四')}}> 点击触发【子传父】</button>
    </div>
  );
};


export default Children;
import React from 'react';

const Children = ({ name, onClick}) => {
  return (
    <div>
      <h1>{ name }</h1>
      <button onClick={() => {onClick('李四')}}> 点击触发【子传父】</button>
    </div>
  );
};


export default Children;
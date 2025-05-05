import React from 'react';
// expalin解释 generate产生

const Children = ({ name, onClick }) => {
  return (
    <div>
      <h1>{name}</h1>
      {/* <h1>{person}</h1> */}
      <button onClick={() => { onClick('李四') }}> 点击触发【子传父】</button>
      {/* <button onClick={() => { onPerson({name: '李四四', age: 20}) }}> 点击触发【子传父】</button> */}
    </div>
  );
};


export default Children;
import React, { useState } from 'react';

import Children from './children';

const Parent = () => {
  const [name, setName] = useState('张三');
  // const [person, setPerson] = useState({name: '张三三', age: 18});

  return (
    <div>
      <h1>About Page</h1>
      <Children name={name} onClick={setName} />
      {/* <Children person={person} onPerson={setPerson}/> */}
      {/* 传递对象是不能够的 */}
    </div>
  );
};


export default Parent;
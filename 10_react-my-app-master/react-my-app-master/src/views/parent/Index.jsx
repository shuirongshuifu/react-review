import React, { useState} from 'react';

import Children from './children';

const Parent = () => {
  const [name, setName] = useState('张三');

  return (
    <div>
      <h1>About Page</h1>
      <Children name={name} onClick={setName}/>
    </div>
  );
};


export default Parent;
import React, { useState } from "react";
import { DataContext } from './index'
// DataContext是一个上下文对象，它包含了Provider和Consumer两个组件。
// Provider是一个组件，它接受一个value属性，这个属性是一个对象，包含了需要共享的数据。
// Consumer是一个组件，它接受一个children属性，这个属性是一个函数，这个函数的参数就是Provider组件的value属性。
import Children from "./children";

const ContextPage = () => {
  const [name, setName] = useState('张三');
  const [person, setPerson] = useState({ name: '张三', age: 18 });


  return (
    <DataContext.Provider value={{ name, setName, person, setPerson }}>
      <Children />
    </DataContext.Provider>
  );
};


export default ContextPage;


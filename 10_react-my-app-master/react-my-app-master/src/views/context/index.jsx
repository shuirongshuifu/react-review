import React, { useState } from "react";
import { DataContext } from './index'

import Children from "./children";

 const ContextPage = () => {
 const [name, setName] = useState('张三');


  return (
    <DataContext.Provider value={{ name, setName }}>
       <Children />
    </DataContext.Provider>
  );
};


export default ContextPage;


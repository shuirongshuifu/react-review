import React, { useState, createContext, useContext } from 'react';
const DataContext = createContext();

function ContextPage() {
  const [sharedData, setSharedData] = useState('初始数据');

  return (
    <DataContext.Provider value={{ sharedData, setSharedData }}>
      <ChildA />
      <ChildB />
    </DataContext.Provider>
  );
}

function ChildA() {
  const { setSharedData } = useContext(DataContext);
  
  return <input onChange={(e) => setSharedData(e.target.value)} />;
}

function ChildB() {
  const { sharedData } = useContext(DataContext);
  
  return <div>接收到的数据: {sharedData}</div>;
}

export default ContextPage;

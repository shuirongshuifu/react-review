// 兄弟组件相互修改数据
import React, { useState } from 'react';
function ContextPage() {
  const [sharedData, setSharedData] = useState('初始数据');

  return (
    <>
      <ChildA data={sharedData} onDataChange={setSharedData} />
      <ChildB data={sharedData} onDataChange={setSharedData} />
    </>
  );
}

function ChildA({ data, onDataChange }) {
  return (<div onClick={() => onDataChange('A更新后的数据')}>子组件A: {data}</div>)
}

function ChildB({ data, onDataChange }) {
  return <div onClick={() => onDataChange('B更新后的数据')}>子组件B: {data}</div>;
}

export default ContextPage;

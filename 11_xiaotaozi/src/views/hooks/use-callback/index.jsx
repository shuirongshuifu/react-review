import React, { useState, useCallback } from 'react';

// 子组件用了memo化，只有当 props 发生变化时才会重新渲染
const ChildComponent = React.memo(({ onIncrement }) => {
  console.log('ChildComponent rendered');

  return (
    <button onClick={onIncrement}>点击+1</button>
  );
});

// 父组件
function UseCallbackPage() {
  const [count, setCount] = useState(0);

  // 使用 useCallback 包裹回调函数
  const increment = useCallback(() => {
    console.log(222);
    
    setCount((prevCount) => prevCount + 1);
  }, []); // 依赖数组为空，表示回调函数只在组件挂载时创建一次

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onIncrement={increment} />
    </div>
  );
}

export default UseCallbackPage;
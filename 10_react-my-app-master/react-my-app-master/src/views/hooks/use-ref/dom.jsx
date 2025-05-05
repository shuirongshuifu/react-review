import React, { useRef, useEffect } from 'react';

const DomRef = ({ref}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    // 页面加载完成后聚焦到输入框
    inputRef.current.focus();
    console.log(inputRef.current.value); // 获取输入框的值
  }, []);

  return (
    <>
    <h1>绑定DOM 示例</h1>
     <input ref={inputRef} />
     <a ref={ref}>我是A标签</a>
    </>
  );
}

export default DomRef;
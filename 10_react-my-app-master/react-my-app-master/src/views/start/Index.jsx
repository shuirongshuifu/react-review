import React from "react";

export default function Start() {
    const data = [
        {
            name: 1,
            id: 1
        },
        {
            name: 2,
            id: 2
        },
       ]

       const currentType = true;



       const onBtnClick = () => {
        console.log('我是按钮点击了click')
       }

  return (
    <>
      <h1>About</h1>
      <h1>About2</h1>
      {/* 循环渲染数据 */}
      <ul>
        {
          data.map((item) => (<li key={item.id}>{item.name}</li>))
        }
      </ul>
      <ul>
        {
          data.filter((item) => item.name !== 1).map((item) => <li key={item.id}>{item.name}</li>)
        }
      </ul>

        {/* 三目运算 */}
        <div>
        { currentType ? <h1>true 111111</h1> : <h1>false22222</h1>}
      </div>

       {/* 添加class类名 */}
       <div className="custom-class"></div>

      {/* 行内样式 */}
      <div style={{color: 'red', fontSize: '16px'}}>我是什么颜色</div>

      {/* 事件绑定 click*/}
      <button onClick={onBtnClick}>我是按钮</button>
    </>
  );
}
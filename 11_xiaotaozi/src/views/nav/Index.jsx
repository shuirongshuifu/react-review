import React from "react";
import { useNavigate } from 'react-router';
import { Button, Flex } from 'antd';

const NavIndex = () => {
  const navigate = useNavigate(); // 路由跳转

  const onClick1 = (id) => {
    // 不同的传参方式，会有不同的接参方式
    id === 1 && navigate('/nav/page1?id=1&name=zhangsan');
    id === 2 && navigate('/nav/page2', { state: { id: 2, name: 'lisi' } });
    id === 3 && navigate('/nav/123');
  }
  return (
    <>
      <Flex gap="small" wrap>
        {/* onclick里面如何带参数？
          1. 直接在onclick里面写函数
          2. 通过闭包的方式，传入参数
          3. 通过箭头函数的方式，传入参数
          具体写法是：onClick={()=>onClick1(1)}
        */}
        <Button type="primary" onClick={() => onClick1(1)}>去到 /nav/page1页面</Button>
        <Button type="primary" onClick={() => onClick1(2)}>去到 /nav/page2页面</Button>
        <Button type="primary" onClick={() => onClick1(3)}>去到 /nav/:id 页面</Button>
      </Flex>
    </>
  );
};

export default NavIndex;
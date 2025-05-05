import React from "react";
import { useNavigate } from 'react-router';
import { Button, Flex } from 'antd';

 const NavIndex = () => {
    const navigate = useNavigate();

    const onClick1 = () => {
        navigate('/nav/page1?id=1&name=zhangsan');
    }

    const onClick2 = () => {
        navigate('/nav/page2', {
            state: {
                id: 2,
                name: 'lisi'
            }
        });
    }

    const onClick3 = () => {
        navigate('/nav/123');
    }


  return (
    <>
     <Flex gap="small" wrap>
        <Button type="primary" onClick={onClick1}>去到 /nav/page1页面</Button>
        <Button type="primary" onClick={onClick2}>去到 /nav/page2页面</Button>
        <Button type="primary" onClick={onClick3}>去到 /nav/:id 页面</Button>
    </Flex>
    </>
  );
};

export default NavIndex;
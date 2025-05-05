import React from "react";
// useLocation是什么？
// useLocation是一个React Router的钩子函数，它允许你在组件中访问当前URL的location对象。
// 这个对象包含了URL的各种信息，如pathname、search、hash等。
import { useNavigate, useLocation } from 'react-router';
import { Button } from 'antd';
 const Page2 = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const state = location.state || {};

  console.log(state, 'state');

  const onBack = () => {
    navigate(-1)
  }
  return (
    <>
    <div>
      <h1>Nav Page2</h1>
      <Button type="primary" onClick={onBack}>返回</Button>
    </div>
    </>
  );
};

export default Page2;
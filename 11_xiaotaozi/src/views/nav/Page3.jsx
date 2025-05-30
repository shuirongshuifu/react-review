import React from "react";
// useParams是什么？
// useParams 是 React Router 提供的一个钩子函数，用于获取 URL 中的参数。
import { useNavigate, useParams } from 'react-router';
import { Button } from 'antd';
 const Page3 = () => {
  const navigate = useNavigate(); 
  const {id} = useParams();
  console.log(id, 'id'); // 输出：123 id

  const onBack = () => {
    navigate(-1)
  }
  return (
    <>
    <div>
      <h1>Nav Page3</h1>
      <Button type="primary" onClick={onBack}>返回</Button>
    </div>
    </>
  );
};

export default Page3;
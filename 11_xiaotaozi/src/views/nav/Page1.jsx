import React from "react";
// useSearchParams是什么？
// useSearchParams 是 React Router 提供的一个钩子函数，用于获取 URL 中的查询参数。
// 它返回一个包含两个元素的数组，第一个元素是一个对象，包含了所有的查询参数，第二个元素是一个函数，用于更新查询参数。
import { useNavigate, useSearchParams } from 'react-router';
import { Button } from 'antd';
 const Page1 = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const onBack = () => {
    navigate(-1)
  }

  console.log(searchParams.get('id'), searchParams.get('name'), 'id,name');

  return (
    <>
    <div>
      <h1>Nav Page1</h1>

      <Button type="primary" onClick={onBack}>返回</Button>
    </div>
    </>
  );
};

export default Page1;
import React from "react";
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
import React from "react";
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
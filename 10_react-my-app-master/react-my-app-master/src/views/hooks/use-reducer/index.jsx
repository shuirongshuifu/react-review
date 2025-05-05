import React from 'react';
import ReducerCounter from './reducer';
import StateCounter from './state';
import ImmerReducerCounter from './immer-reducer';

import { Divider } from "antd";
export default function Counter() {
  

  return (
    <>
      <ReducerCounter />
      <Divider />
      <StateCounter />
      <Divider />
      <ImmerReducerCounter />
    </>
  );
}

import React, { useContext } from "react";
import { DataContext } from './index'

const ViewComponent = () => {
    const { state } = useContext(DataContext);
  return (
    <div>
     <p>Hello{state.name}! You are {state.age}.</p>
    </div>
  );
};

export default ViewComponent;
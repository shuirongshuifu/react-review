import React from "react";
// 2、引入上下文
import { DataContext } from "./index";

import { useImmerReducer } from 'use-immer'

import ViewComponent from './view'
import OperatorButton from "./operator";
function reducer(draft, action) {
    switch (action.type) {
        case 'incremented_age':
            draft.age++
            break;
        case 'decremented_age':
            draft.age--
        break;
        case 'change_name':
            draft.name = '张三'
        break;
        default:
          throw Error('Unknown action.');
    }
}
const UseContextPage = () => {
   const [state, dispatch] = useImmerReducer(reducer, { age: 42, name: 'John' });

  return (
    // 3、使用Provider包裹子组件，并传入需要共享的数据和方法
    <DataContext.Provider 
    value={{
      state,
      dispatch
    }}>
      <OperatorButton />
      <ViewComponent />
    </DataContext.Provider>
  );
};

export default UseContextPage;
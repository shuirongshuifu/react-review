import React from "react";
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
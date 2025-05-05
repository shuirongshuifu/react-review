import React from 'react';
import { useImmerReducer } from 'use-immer'
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

export default function ImmerReducerCounter() {
  const [state, dispatch] = useImmerReducer(reducer, { age: 42, name: 'John' });

  return (
    <>
     <h1>useImmerReducer 管理</h1>
      <button onClick={() => {
        dispatch({ type: 'incremented_age' })
      }}>
        增加年龄
      </button>
      <button onClick={() => {
        dispatch({ type: 'decremented_age' })
      }}>
        减少年龄
      </button>
      <button onClick={() => {
        dispatch({ type: 'change_name' })
      }}>
        更改名字
      </button>
      <p>Hello{state.name}! You are {state.age}.</p>
    </>
  );
}

import { useReducer } from 'react';

function reducer(state, action) {
  if (action.type === 'incremented_age') {
    return {
      ...state,
      age: state.age + 1
    };
  }

  if(action.type === 'decremented_age') {
    return {
      ...state,
     age: state.age -1
    };
  }

  if(action.type === 'change_name') {
    return {
      ...state,
     name: '张三'
    };
  }
  throw Error('Unknown action.');
}

export default function ReducerCounter() {
  const [state, dispatch] = useReducer(reducer, { age: 42, name: 'John' });

  return (
    <>
     <h1>useReducer 管理</h1>
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

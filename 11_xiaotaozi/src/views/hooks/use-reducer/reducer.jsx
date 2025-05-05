import { useReducer } from 'react';
// useReducer是什么？
// useReducer是一个React Hook，它接受一个reducer函数和一个初始状态，返回一个state和dispatch函数。
// reducer函数是一个纯函数，它接受两个参数：当前状态和一个action对象，返回一个新的状态。
// dispatch函数用于分发action，它会调用reducer函数，并将新的状态传递给组件。
// useReducer可以用于管理复杂的状态逻辑，例如表单验证、计数器等。
// useReducer和useState的区别？
// useState和useReducer都是React Hook，它们都可以用于管理组件的状态。
// useState是一个简单的状态管理器，它接受一个初始状态和一个更新状态的函数，返回一个状态和一个更新状态的函数。
// useReducer是一个更复杂的状态管理器，它接受一个reducer函数和一个初始状态，返回一个状态和一个分发action的函数。

function reducer(state, action) {
  console.log('state', state, 'action', action);
  
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

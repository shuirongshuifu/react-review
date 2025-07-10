import React, { useEffect, useState, memo, useMemo, useCallback } from 'react'

const Child = memo(({ list, deleteList }) => {
    console.log('list', list)
    console.log('Child render')

    const delLi = (i) => {
        deleteList(i)
    }

    return (
        <div>
            <h3>Child Component</h3>
            <ul>
                {
                    list.map((item, index) => {
                        return <li style={{ marginBottom: '12px' }} key={item}>
                            {item} &nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={() => delLi(index)} >删除</button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
})

export default function UseCallback() {
    const [number, setNumber] = React.useState(0);
    const [list, setList] = React.useState(['孙悟空', '猪八戒', '沙和尚']);

    const handleFn = (i) => {
        const _list = [...list];
        _list.splice(i, 1);
        setList(_list);
    }

    // const deleteList = handleFn
    /**
     * 使用 useCallback 包装函数，避免每次渲染都创建新的函数实例
     * 这样可以优化性能，特别是在子组件中使用了 memo 的情况下
     * */
    const deleteList = useCallback((i) => handleFn(i), [list])

    useEffect(() => {
        let timer = setInterval(() => {
            setNumber((prev) => prev + 1);
        }, 1000);
        return () => {
            timer && clearInterval(timer);
        }
    }, [])

    console.log('render')

    return (
        <div>
            <h2>{number}</h2>
            <Child list={list} deleteList={deleteList} />
        </div>
    )
}

// export default function UseCallback() {
//   const [count, setCount] = useState(0);

//   // 错误示范：这里使用了空数组作为依赖项，意味着 handleClick 不会更新
//   const handleClick = useCallback(() => {
//     console.log(`Clicked ${count} times`);
//     setCount(count + 1);
//   }, [count]); // 空数组表示依赖永远不会改变，要写依赖项[count]

//   return (
//     <div>
//       <button onClick={handleClick}>Increase</button>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

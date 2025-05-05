import React, { useState, useMemo} from "react";

const UseMomePage = () => {
    const [count, setCount] = useState(1)
    const [count1, setCount1] = useState(2)

    const doubleCount = useMemo(() => {
      return count * count1
    }, [count, count1])

    return (
      <div>
        <h1>useMemo 使用示例</h1>
        <button onClick={() => setCount(count + 1)}>点击更改count+1</button>
        <button onClick={() => setCount1(count1 + 1)}>点击更改count1+1</button>

        <p>当前count值：{count}</p>
        <p>当前count1值：{count1}</p>
        <p>当前useMemo后doubleCount值：{doubleCount}</p>
      </div>
    )
}

export default UseMomePage
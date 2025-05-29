import React, { useState, useMemo, use } from 'react'
import Child from './Components/Child.jsx'

export default function UseMemo() {
  const [count, setCount] = useState(0)
  const [str, setStr] = useState('^_^')

  console.log('组件渲染了')

  function largerFn() {
    console.log('⚠️⚠️⚠️ 大量运算的函数执行了')
    for (let i = 0; i < 1000000000; i++) {
    }
    return 100;
  }

  /**
   * useMemo应用场景一 复杂耗时的昂贵计算
   * */
  // const result = largerFn() // 每次组件重新渲染，都会执行这个函数，导致性能问题
  // 使用 useMemo 来缓存计算结果，只有当依赖项发生变化时才会重新计算（当然，这个是没有依赖项的也可以缓存）
  const result = useMemo(() => {
    return largerFn()
  }, [])

  const style = useMemo(() => {
    return { color: 'red', fontSize: '20px' }
  }, [])

  return (
    <div>
      <h3>UseMemo</h3>
      <div>当前数字：{count}</div>
      <button onClick={() => setCount(count + 1)}>数字加一</button>
      <br />
      <br />
      <div>斐波那契的值：{result}</div>
      <br />
      <div>当前字符串：{str}</div>
      <button onClick={() => setStr(str + '^_^')}>字符串拼接</button>
      <br />
      <br />
      <div>子组件</div>
      {/* 使用 memo 来优化子组件的渲染，只有当 props 发生变化时才会重新渲染 */}
      {/* memo 是高阶组件，包裹子组件 */}
      <Child str={str} style={style} />
    </div>
  )
}

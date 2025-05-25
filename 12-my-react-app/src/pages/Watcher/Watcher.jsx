import React, { use } from 'react'
import { useEffect, useState } from 'react'
import Child from './Components/Child.jsx'

export default function Watcher() {
  let [count, setCount] = useState(0)
  let [str, setStr] = useState('^_^')
  let [bool, setBool] = useState(true)

  // // 没有第二个参数，即不写依赖项数组，只要依赖数据变化渲染执行，useEffect就会执行，相当于监听所有的依赖数据变化
  // useEffect(() => {
  //   console.log('count:', count)
  //   console.log('str:', str)
  // })

  // // 有第二个参数数组，但是参数数组为空数组，useEffect只会在组件挂载时执行一次
  // // 也就是相当于componentDidMount
  // useEffect(() => {
  //   console.log('count:', count)
  //   console.log('str:', str)
  // }, [])

  // // 只监听count
  // useEffect(() => {
  //   console.log('count:', count)
  // }, [count])

  // // 只监听str
  // useEffect(() => {
  //   console.log('str:', str)
  // }, [str])

  // 监听str或者count
  useEffect(() => {
    console.log('str || count:', str, count)
  }, [str, count])

  /* useEffect无论有没有第二个参数数组，useEffect都会compentnDidMount时执行 */
  /* useEffect假设不传递第二个参数数组，是不传递，那么将会监听所有的依赖变量（类比vue的watchEffect的用法） */
  /* useEffect假设假设第二个参数数组为空数组，那么就是没有依赖项，不监听任何依赖数据的变化，也就只会执行一次 */

  return (
    <div>
      <div>数字的值：{count}</div>
      <button onClick={() => setCount(count = count + 1)} >数字加一</button>
      <br />
      <br />
      <div>字符串的值：{str}</div>
      <button onClick={() => setStr(str = str + '^_^')} >字符串拼接</button>
      <br />
      <br />
      <br />
      <div>子组件</div>
      <button onClick={() => setBool(bool = !bool)} >子组件卸载渲染切换</button>
      {bool && <Child count={count} />}
    </div>
  )
}

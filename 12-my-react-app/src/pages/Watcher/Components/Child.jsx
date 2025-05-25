import React from 'react'
import { useEffect } from 'react'

export default function Child({ count }) {

  // useEffect(() => {
  //   console.log('子组件count变化了', count)
  // }, [count])

  useEffect(() => {
    console.log('子组件渲染了')
    return () => {
      console.log('子组件卸载了')
    }
  }, [])

  return (
    <div>Child count: {count}</div>
  )
}

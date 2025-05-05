import React, { useRef, useEffect } from "react";
import { Button, Divider } from "antd";
// useRef是什么？
// useRef是一个React Hook，它返回一个可变的ref对象，这个对象的.current属性可以用来存储任何值。
// useRef的值在组件的整个生命周期内保持不变，即使组件重新渲染也不会改变。
import DomRef from './dom'

const useRefPage = () => {
    const count = useRef(777);
    const componentRef = useRef(null);
    console.log('组件重新渲染！！！')
     
    useEffect(() => {
        console.log(count.current)
        console.log(componentRef.current, 'componentRef1222')
    }, [count])

    return (
        <div>
            <h1>错误❌示例</h1>
            <Button onClick={() => {
                count.current++
            }}>
                Ref点击加加
            </Button>
            <h1>{count.current}</h1>

            <Divider />

            <DomRef ref={componentRef}/>
        </div>
    )
}

export default useRefPage
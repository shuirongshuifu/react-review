import React, { useRef, useEffect } from "react";
import { Button, Divider } from "antd";

import DomRef from './dom'

const useRefPage = () => {
    const count = useRef(0);
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
import React from 'react'
import { ContextData } from './Context'


export default function Level3() {
    const context = React.useContext(ContextData) // 要写在内部

    console.log(333, context) // { name: '张三', age: 500 }

    const changeAge = () => {
        const _info = { ...context.info }
        _info.age = _info.age + 1
        context.setInfo(_info)
    }

    return (
        <div>Level3：{context.info.name}{context.info.age} <button onClick={changeAge}>修改年龄</button>
        </div>
    )
}

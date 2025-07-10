import React, { useContext } from 'react'
import { ContextData } from './Context'
import Level3 from './Level3'

export default function Level2() {

    const context = useContext(ContextData) // 要写在内部

    console.log(222, context) // { name: '张三', age: 500 }

    const changeName = () => {
        const _info = { ...context.info }
        _info.name = _info.name + '^_^'
        context.setInfo(_info)
    }

    return (
        <div>Level2： {context.info.name} {context.info.age} <button onClick={changeName}>修改姓名</button>
            <br />
            <br />
            <Level3></Level3>
        </div>
    )
}

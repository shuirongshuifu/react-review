import React, { useState } from 'react'
import Level2 from './Level2'

import { ContextData } from './Context'

export default function UseContext() {

    const [info, setInfo] = useState({
        name: '张三',
        age: 500
    })

    return (
        <div>
            <h3>useContext 有点像vue中的provide和inject呀</h3>
            <p>它可以让我们在组件树中传递数据，而不必通过 props 一层层传递</p>
            <strong>{info.name} {info.age}</strong>
            <br />
            <br />
            <ContextData.Provider value={{ info, setInfo }}>
                <Level2 />
            </ContextData.Provider>
        </div>
    )
}

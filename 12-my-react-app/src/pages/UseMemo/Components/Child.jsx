import React, { memo } from 'react'

// 使用 memo 来优化子组件的渲染，只有当 props 发生变化时才会重新渲染
// 类似于纯组件的优化
// 这里的style是一个对象，父组件重新渲染的时候，style对象的引用地址会发生变化，所以子组件会重新渲染
// 所以，如果不希望子组件重新渲染，可以将父组件传递来的style也使用useMemo来缓存
export default memo(function Child({ str, style }) {
    console.log('子组件渲染了')
    return (
        <div style={style} >Child的str为：{str}</div>
    )
})

// // 不使用的话，每次父组件更新，子组件都会重新渲染
// export default function Child() {
//     console.log('子组件渲染了')
//     return (
//         <div>Child</div>
//     )
// }

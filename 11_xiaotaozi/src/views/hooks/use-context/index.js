import { createContext } from 'react'
// 1、先定义上下文
// DataContext 本身不是自动全局可用的，但通过在应用顶层提供 Provider，你可以使其在整个应用范围内可用。

export const DataContext = createContext()
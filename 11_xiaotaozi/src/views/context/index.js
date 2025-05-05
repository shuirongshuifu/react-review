import { createContext } from 'react'
// createContext是什么？
// createContext是一个函数，它接受一个参数，这个参数是一个默认值，
// 然后返回一个对象，这个对象有两个属性，一个是Provider，一个是Consumer。
// DataContext是一个上下文对象，它包含了Provider和Consumer两个组件。
export const DataContext = createContext(null)
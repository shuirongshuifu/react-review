import React, { Component } from 'react'
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'

import './ToDoList.css'

export default class ToDoList extends Component {
    state = {
        todos: [
            { id: 1, name: '吃饭', done: true },
            { id: 2, name: '睡觉', done: false },
            { id: 3, name: '打豆豆', done: false },
        ]
    }
    // 添加待办事项
    addTodo = (toDoName) => {
        let newItem = {
            id: new Date().getTime(),
            name: toDoName,
            done: false
        }
        this.setState({
            todos: [...this.state.todos, newItem]
        })
    }
    changeInput = (e, todo) => {
        // 因为是引用数据类型，所以直接修改对象的属性值就可以了
        let item = this.state.todos.find(item => item.id === todo.id)
        item.done = e.target.checked
        // 修改完毕以后，驱动渲染函数更新视图
        this.setState({
            todos: [...this.state.todos]
        })
    }
    deleteTodo = (id) => {
        // // 方式一：通过filter方法过滤掉要删除的待办事项
        // let newTodos = this.state.todos.filter(item => item.id !== id)
        // this.setState({
        //     todos: newTodos
        // })
        // // 方式二：通过splice方法删除要删除的待办事项
        let index = this.state.todos.findIndex(item => item.id === id)
        this.state.todos.splice(index, 1)
        this.setState({
            todos: this.state.todos
        })
    }
    switch = () => {
        let isEveryDone = this.state.todos.every(item => item.done === true)
        // 如果每一个都完成了，就将每一个都设置为未完成，否则就设置为已完成
        console.log(isEveryDone)
        if (isEveryDone) {
            const newTodos = this.state.todos.map(item => {
                item.done = false
                return item
            })
            this.setState({
                todos: newTodos
            })
        } else {
            const newTodos = this.state.todos.map(item => {
                item.done = true
                return item
            })
            this.setState({
                todos: newTodos
            })
        }
    }
    render() {
        return (
            <div className='todoList'>
                <h2>ToDoList</h2>
                <Header addTodo={this.addTodo} />
                <Content todos={this.state.todos} changeInput={this.changeInput} deleteTodo={this.deleteTodo} />
                <Footer todos={this.state.todos} switch={this.switch} />
            </div>
        )
    }
}

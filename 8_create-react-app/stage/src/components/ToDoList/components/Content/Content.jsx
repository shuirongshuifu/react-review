import React, { Component } from 'react'
import './Content.css'

export default class Content extends Component {
    render() {
        return (
            <div className='content'>
                {
                    this.props.todos.map(todo => {
                        return (
                            <div className='item' key={todo.id}>
                                <input type="checkbox" checked={todo.done} onChange={(e) => {
                                    this.props.changeInput(e, todo)
                                }} />
                                <span>{todo.name}</span>
                                <button onClick={() => {
                                    this.props.deleteTodo(todo.id)
                                }} >删除</button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

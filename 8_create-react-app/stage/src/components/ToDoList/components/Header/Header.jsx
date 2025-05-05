import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <input type="text" placeholder='请输入你的任务名称，按回车键确认' onKeyDown={this.keyDown} />
        )
    }
    keyDown = (event) => {
        if (event.keyCode === 13) {
            const { value } = event.target
            if (value.trim() === '') {
                alert('请输入任务名称')
                return
            }
            this.props.addTodo(value)
            event.target.value = ''
        }
    }
}
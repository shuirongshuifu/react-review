import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        let doneNum = this.props.todos.filter((todo) => {
            return todo.done === true
        }).length
        let allNum = this.props.todos.length
        return (
            <div style={{ margin: '12px 0' }}>已完成：{doneNum} &nbsp;&nbsp;&nbsp;&nbsp;
                共计：{allNum} &nbsp;&nbsp;&nbsp;&nbsp;
                <input style={{ width: '72px' }} type="checkbox" checked={doneNum === allNum && allNum != 0} onChange={this.props.switch} />
            </div>
        )
    }
}

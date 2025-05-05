import React, { Component } from 'react'
import eventBus from '../../EventBus'

export default class SendRequest extends Component {
    componentDidMount() {
        eventBus.on('getRequestData', this.handleMessage);
    }
    componentWillUnmount() {
        eventBus.off('getRequestData', this.handleMessage);
    }
    handleMessage = (data) => {
        console.log('Received data:', data);
    }
    render() {
        return (
            <div className='sendRequestBox'>
                <br />
                <button>受到兄弟组件传递来的数据</button>
            </div>
        )
    }
}

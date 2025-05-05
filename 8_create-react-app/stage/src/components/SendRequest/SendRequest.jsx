import React, { Component } from 'react'

import './SendRequest.css'
import axios from 'axios'

import eventBus from '../../EventBus'

export default class SendRequest extends Component {
    componentDidMount() { }
    send = () => {
        let query = {
            pageIndex: 1,
            pageSize: 4,
            sortWord: 'id',
            sortOrder: 'DESC',
            searchWord: '',
        }
        axios.get('/api/getTableData', { params: query })
            .then((res) => {
                console.log(res.data)
                eventBus.emit('getRequestData', res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        return (
            <div className='sendRequestBox'>
                <br />
                <button onClick={this.send}>发请求</button>
            </div>
        )
    }
}

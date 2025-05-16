import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

export default function Home() {
  const navigate = useNavigate()

  const queryFn = () => {
    navigate('/about' + '?from=home&name=tom&age=18')
  }
  const stateFn = () => {
    navigate('/about', {
      state: { from: 'home', name: 'tom', age: 18 }
    })
  }
  const dynamicFn = () => {
    navigate('/dynamic/147258369')
  }
  const replaceFn = () => {
    navigate('/about', {
      replace: true
    })
  }

  const buttonStyle = {
    margin: '6px'
  }

  return (
    <div>
      <h2>react-router-dom常用hook</h2>
      <Button onClick={() => navigate('/about')} color="cyan" variant="dashed" style={buttonStyle} >navigate('/about')</Button>
      <Button onClick={queryFn} color="cyan" variant="dashed" style={buttonStyle}>
        query传参需手动拼接
      </Button>
      <Button onClick={stateFn} color="cyan" variant="dashed" style={buttonStyle}>
        state传参
      </Button>
      <Button onClick={dynamicFn} color="cyan" variant="dashed" style={buttonStyle}>
        动态路由传参
      </Button>
      <Button onClick={replaceFn} color="cyan" variant="dashed" style={buttonStyle}>
        replace: true 替换当前页面的跳转
      </Button>
    </div>
  )
}

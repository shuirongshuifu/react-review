import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'antd'

export default function About() {
  const navigate = useNavigate()
  const params = useParams()
  return (
    <div>
      <h2>动态路由</h2>
      <h3>useParams { JSON.stringify(params) }</h3>
      <Button onClick={() => navigate(-1)} color="cyan" variant="dashed">
        navigate(-1)
      </Button>
    </div>
  )
}

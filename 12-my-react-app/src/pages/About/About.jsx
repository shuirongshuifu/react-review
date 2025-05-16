import React from 'react'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { Button } from 'antd'

export default function About() {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  // console.log('location', location)
  console.log("searchParams.get('xxx')", 
    searchParams.get('from'),
    searchParams.get('name'),
    searchParams.get('age'),
  )
  return (
    <div>
      <h3>location.search为： {location.search}</h3>
      <h3>searchParams.get('xxx')为： 
        {searchParams.get('from')} &nbsp;
        {searchParams.get('name')} &nbsp;
        {searchParams.get('age')}
      </h3>
      <br />
      <h3>location.state为： {JSON.stringify(location.state)}</h3>
      <Button onClick={() => navigate(-1)} color="cyan" variant="dashed">
        navigate(-1)
      </Button>
    </div>
  )
}

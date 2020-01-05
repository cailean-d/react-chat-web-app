import React from 'react'
import useTitle from 'hooks/useTitle'

const Home = (props: any) => {
  useTitle('Home Page')
  return (
    <div className='page-container'>Home</div>
  )
}

export default Home
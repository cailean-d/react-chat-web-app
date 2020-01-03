import React from 'react'
import useTitle from 'hooks/useTitle'

const NotFound = (props: any) => {
  useTitle('Not found')

  return (
    <div className='page-container'>NotFound</div>
  )
}

export default NotFound
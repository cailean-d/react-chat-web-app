import React from 'react'
import useTitle from 'hooks/useTitle'
import NotFoundPanel from 'components/notfound/notFoundPanel'

const NotFound = (props: any) => {
  useTitle('Not found')
  return (
    <div className='page-container'>
      <NotFoundPanel />
    </div>
  )
}

export default NotFound
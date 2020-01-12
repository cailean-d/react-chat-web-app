import React from 'react'
import useTitle from 'hooks/useTitle'
import NavMenu from 'components/navMenu/navMenu'

const App = (props: any) => {
  useTitle('App')
  return (
    <div style={{ display: 'flex' }}>
      <NavMenu />
      <div style={{ background: '#23242b', width: '100%' }}></div>
    </div>
  )
}

export default App
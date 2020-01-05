import React from 'react'
import { Router } from '@reach/router'
import Home from 'pages/home'
import Login from 'pages/login'
import Registration from 'pages/registration'
import NotFound from 'pages/notfound'
import Confirm from 'pages/confirm'
import Restore from 'pages/restore'

const App = () => {
  return (
    <Router>
      <Home path='/' />
      <Login path='login' />
      <Registration path='reg' />
      <Confirm path='confirm' />
      <Restore path='restore' />
      <NotFound default />
    </Router>
  )
}

export default App

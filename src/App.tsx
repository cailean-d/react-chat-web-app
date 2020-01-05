import React from 'react'
import { Router } from '@reach/router'
import Home from 'pages/home'
import Login from 'pages/login'
import Registration from 'pages/registration'
import NotFound from 'pages/notfound'
import Confirm from 'pages/confirm'

const App = () => {
  return (
    <Router>
      <Home path='/' />
      <Login path='login' />
      <Registration path='reg' />
      <Confirm path='confirm' />
      <NotFound default />
    </Router>
  )
}

export default App

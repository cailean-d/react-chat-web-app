import React from 'react'
import { Router } from '@reach/router'
import Home from 'pages/home'
import Login from 'pages/login'
import Registration from 'pages/registration'
import NotFound from 'pages/notfound'
import Confirm from 'pages/confirm'
import Restore from 'pages/restore'
import AppPage from 'pages/app'

const App = () => {
  return (
    <Router>
      <Home path='/' />
      <AppPage path='/app' />
      <Login path='login' />
      <Registration path='reg' />
      <Confirm path='confirm' />
      <Restore path='restore' />
      <NotFound default />
    </Router>
  )
}

export default App

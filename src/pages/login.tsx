import React from 'react'
import useTitle from 'hooks/useTitle'
import LoginForm from 'components/forms/loginForm'

const Login = (props: any) => {
  useTitle('Login Page')
  return (
    <div className='page-container'>
      <LoginForm />
    </div>
  )
}

export default Login

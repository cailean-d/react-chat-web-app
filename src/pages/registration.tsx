import React from 'react'
import useTitle from 'hooks/useTitle'
import RegForm from 'components/forms/regForm'

const Registration = (props: any) => {
  useTitle('Registration Page')
  return (
    <div className='page-container'>
      <RegForm />
    </div>
  )
}

export default Registration
import React from 'react'
import useTitle from 'hooks/useTitle'
import ConfrimForm from 'components/forms/confirmForm'

const Confirm = (props: any) => {
  useTitle('Confirm Page')
  return (
    <div className='page-container'>
      <ConfrimForm />
    </div>
  )
}

export default Confirm
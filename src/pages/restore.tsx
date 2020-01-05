import React from 'react'
import useTitle from 'hooks/useTitle'
import RestoreForm from 'components/forms/restoreForm'

const Restore = (props: any) => {
  useTitle('Restore Page')
  return (
    <div className='page-container'>
      <RestoreForm />
    </div>
  )
}

export default Restore
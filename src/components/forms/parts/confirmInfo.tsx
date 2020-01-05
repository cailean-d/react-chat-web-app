import React from 'react'
import s from 'components/forms/form.module.scss'

const ConfirmInfo = ({ children }: any) => {
  return (
    <div className={s.confirmInfo}>{children}</div>
  )
}

export default ConfirmInfo

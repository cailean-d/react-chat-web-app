import React from 'react'
import s from 'components/forms/form.module.scss'

const FormPanel = ({ children }: any) => {
  return (
    <div className={s.formPanel}>{children}</div>
  )
}

export default FormPanel

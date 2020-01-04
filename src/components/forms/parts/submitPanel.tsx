import React from 'react'
import s from 'components/forms/form.module.scss'

const SubmitPanel = ({ children }: any) => {
  return (
    <div className={s.submitPanel}>{children}</div>
  )
}

export default SubmitPanel

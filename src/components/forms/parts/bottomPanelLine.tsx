import React from 'react'
import s from 'components/forms/form.module.scss'

const BottomPanelLine = ({ children }: any) => {
  return (
    <div className={s.line}>{children}</div>
  )
}

export default BottomPanelLine

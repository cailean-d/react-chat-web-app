import React from 'react'
import s from 'components/forms/form.module.scss'

const BottomPanel = ({ children }: any) => {
  return (
    <div className={s.bottomPanel}>{children}</div>
  )
}

export default BottomPanel

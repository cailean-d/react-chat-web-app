import React from 'react'
import s from 'components/forms/form.module.scss'

const FormLabel = ({ title }: any) => {
  return (
    <h2 className={s.formLabel}>{title}</h2>
  )
}

export default FormLabel

import React from 'react'
import { Field as FormikField, ErrorMessage, useField } from 'formik'
import s from 'components/forms/form.module.scss'

const Field = ({ Icon, type, name, placeholder }: any) => {
  const [, meta] = useField(name)
  return (
    <div className={s.formField}>
      <Icon className={s.formIcon} />
      <FormikField 
        className={s.input} 
        type={type || 'text'} 
        placeholder={placeholder} 
        name={name} 
        error={meta.touched && meta.error ? meta.error : undefined}
      />
      <div className={s.inputLine} data-line />
      <ErrorMessage className={s.errorMessage} name={name} component="div" />
    </div>
  )
}

export default Field
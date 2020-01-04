import React from 'react'
import { Field as FormikField, ErrorMessage } from 'formik'
import s from 'components/forms/form.module.scss'

const Field = ({ Icon, type, name, placeholder, errors, touched }: any) => {
  return (
    <div className={s.formField}>
      <Icon className={s.formIcon} />
      <FormikField 
        className={s.input} 
        type={type || 'text'} 
        placeholder={placeholder} 
        name={name} 
        error={touched[name] && errors[name]}
      />
      <div className={s.inputLine} data-line />
      <ErrorMessage className={s.errorMessage} name={name} component="div" />
    </div>
  )
}

export default Field
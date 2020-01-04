import React from 'react'
import { FaSpinner } from 'react-icons/fa'
import s from 'components/forms/form.module.scss'

const SubmitButton = ({ text, isValid, isSubmitting }: any) => {
  return (
    <button className={s.submitButton} type='submit' disabled={!isValid || isSubmitting}>
      {isSubmitting ? <FaSpinner className="icon-spin"/> : text}
    </button>
  )
}

export default SubmitButton
import React from 'react'
import { FaSpinner } from 'react-icons/fa'
import { useFormikContext } from 'formik'
import s from 'components/forms/form.module.scss'

const SubmitButton = ({ text }: any) => {
  const { isValid, isSubmitting } = useFormikContext()
  return (
    <button className={s.submitButton} type='submit' disabled={!isValid || isSubmitting}>
      {isSubmitting ? <FaSpinner className="icon-spin"/> : text}
    </button>
  )
}

export default SubmitButton
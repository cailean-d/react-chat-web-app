import React from 'react'
import { FaUser, FaUnlockAlt, FaSpinner } from 'react-icons/fa'
import { Link } from '@reach/router'
import { Field, ErrorMessage, Form, withFormik } from 'formik'
import * as Yup from 'yup'
import s from './loginForm.module.scss'

const LoginForm = ({ isValid, isSubmitting, errors, touched }: any) => {
  return (
    <div className={s.formPanel}>
      <h2 className={s.formLabel}>Authorization</h2>
      <Form autoComplete='off'>
        <div className={s.formField}>
          <FaUser className={s.formIcon} />
          <Field 
            className={s.input} 
            type="text" 
            placeholder="Name" 
            name="name" 
            error={touched.name && errors.name}
          />
          <div className={s.inputLine} data-line />
          <ErrorMessage className={s.errorMessage} name="name" component="div"/>
        </div>
        <div className={s.formField}>
          <FaUnlockAlt className={s.formIcon} />
          <Field 
            className={s.input} 
            type="password" 
            placeholder="Password" 
            name="password" 
            error={touched.password && errors.password}
          />
          <div className={s.inputLine} data-line />
          <ErrorMessage className={s.errorMessage} name="password" component="div"/>
        </div>
        <div className={s.submitPanel}>
          <button className={s.submitButton} type='submit' disabled={!isValid || isSubmitting}>
            {isSubmitting ? <FaSpinner className="icon-spin"/> : 'Sign in'}
          </button>
        </div>
      </Form>
      <div className={s.regPanel}>
        <span>Do not you have an account?</span>
        <Link className={s.regLink} to="/reg">Registration</Link>
      </div>
    </div>
  )
}


const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .matches(/^[A-Za-zА-Яа-я\s-_]+[0-9]*$/, 'Invalid characters')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
});

const FormikForm = withFormik<any, any>({
  displayName: 'LoginForm',
  mapPropsToValues: () => ({ name: '', password: '' }),
  validationSchema: validationSchema,
  validateOnMount: true,
  handleSubmit(values, { setSubmitting, props }) {

  }
})(LoginForm)

export default FormikForm

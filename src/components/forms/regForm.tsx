import React from 'react'
import { FaUser, FaUnlockAlt } from 'react-icons/fa'
import { Form, withFormik } from 'formik'
import * as Yup from 'yup'
import { navigate } from '@reach/router'
import FormPanel from 'components/forms/parts/formPanel'
import FormLabel from 'components/forms/parts/formLabel'
import Field from 'components/forms/parts/field' 
import SubmitButton from 'components/forms/parts/submitButton' 
import SubmitPanel from 'components/forms/parts/submitPanel'
import BottomPanel from 'components/forms/parts/bottomPanel'
import NavLink from 'components/forms/parts/navLink'

const RegForm = () => {
  return (
    <FormPanel>
      <FormLabel title='Registration' />
      <Form autoComplete='off'>
        <Field name='name' placeholder='Name' Icon={FaUser} />
        <Field name='password' placeholder='Password' Icon={FaUnlockAlt} type='password' />
        <Field name='confirm' placeholder='Confirm password' Icon={FaUnlockAlt} type='password' />
        <SubmitPanel>
          <SubmitButton text='Create new account' />
        </SubmitPanel>
      </Form>
      <BottomPanel>
        <span>Have you got an account?</span>
        <NavLink to="/login" text='Log in' />
      </BottomPanel>
    </FormPanel>
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
  confirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required')
});

const FormikForm = withFormik({
  mapPropsToValues: () => ({ name: '', password: '', confirm: '' }),
  validationSchema,
  validateOnMount: true,
  handleSubmit(values) {
    navigate('/app')
  }
})(RegForm)

export default FormikForm

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
import BottomPanelLine from 'components/forms/parts/bottomPanelLine'

const LoginForm = () => {
  return (
    <FormPanel>
      <FormLabel title='Authorization' />
      <Form autoComplete='off'>
        <Field name='name' placeholder='Name' Icon={FaUser} />
        <Field name='password' placeholder='Password' Icon={FaUnlockAlt} type='password' />
        <SubmitPanel>
          <SubmitButton text='Sign in' />
        </SubmitPanel>
      </Form>
      <BottomPanel>
        <BottomPanelLine>
          <span>Do not you have an account?</span>
          <NavLink to="/reg" text='Registration' />
        </BottomPanelLine>
        <BottomPanelLine>
          <span>Forgot a password?</span>
          <NavLink to="/restore" text='Restore an account' />
        </BottomPanelLine>
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
});

const FormikForm = withFormik({
  mapPropsToValues: () => ({ name: '', password: '' }),
  validationSchema,
  validateOnMount: true,
  handleSubmit(values) {
    navigate('/app')
  }
})(LoginForm)

export default FormikForm

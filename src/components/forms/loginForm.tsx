import React from 'react'
import { FaUser, FaUnlockAlt } from 'react-icons/fa'
import { Form, withFormik } from 'formik'
import * as Yup from 'yup'
import FormPanel from 'components/forms/parts/formPanel'
import FormLabel from 'components/forms/parts/formLabel'
import Field from 'components/forms/parts/field' 
import SubmitButton from 'components/forms/parts/submitButton' 
import SubmitPanel from 'components/forms/parts/submitPanel'
import BottomPanel from 'components/forms/parts/bottomPanel'
import NavLink from 'components/forms/parts/navLink'

const LoginForm = ({ isValid, isSubmitting, errors, touched }: any) => {
  return (
    <FormPanel>
      <FormLabel title='Authorization' />
      <Form autoComplete='off'>
        <Field 
          name='name' 
          placeholder='Name' 
          errors={errors} 
          touched={touched} 
          Icon={FaUser} 
        />
        <Field
          name='password' 
          placeholder='Password' 
          errors={errors} 
          touched={touched} 
          Icon={FaUnlockAlt} 
          type='password' 
        />
        <SubmitPanel>
          <SubmitButton text='Sign in' isValid={isValid} isSubmitting={isSubmitting} />
        </SubmitPanel>
      </Form>
      <BottomPanel>
        <span>Do not you have an account?</span>
        <NavLink to="/reg" text='Registration' />
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

const FormikForm = withFormik<any, any>({
  displayName: 'LoginForm',
  mapPropsToValues: () => ({ name: '', password: '' }),
  validationSchema: validationSchema,
  validateOnMount: true,
  handleSubmit(values, { setSubmitting, props }) {

  }
})(LoginForm)

export default FormikForm

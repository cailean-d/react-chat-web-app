import React from 'react'
import { FaUser } from 'react-icons/fa'
import { Form, withFormik } from 'formik'
import * as Yup from 'yup'
import FormPanel from 'components/forms/parts/formPanel'
import FormLabel from 'components/forms/parts/formLabel'
import Field from 'components/forms/parts/field' 
import SubmitButton from 'components/forms/parts/submitButton' 
import SubmitPanel from 'components/forms/parts/submitPanel'
import BottomPanel from 'components/forms/parts/bottomPanel'
import NavLink from 'components/forms/parts/navLink'

const RestoreForm = () => {
  return (
    <FormPanel>
      <FormLabel title='Restore an account' />
      <Form autoComplete='off'>
        <Field name='email' placeholder='Email' Icon={FaUser} />
        <SubmitPanel>
          <SubmitButton text='Send' />
        </SubmitPanel>
      </Form>
      <BottomPanel>
        <NavLink to="/login" text='Log in' />
      </BottomPanel>
    </FormPanel>
  )
}


const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email is invalid')
    .required('Required'),
});

const FormikForm = withFormik({
  mapPropsToValues: () => ({ email: '' }),
  validationSchema,
  validateOnMount: true,
  handleSubmit(values) {}
})(RestoreForm)

export default FormikForm

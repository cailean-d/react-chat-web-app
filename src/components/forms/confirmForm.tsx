import React from 'react'
import FormPanel from 'components/forms/parts/formPanel'
import FormLabel from 'components/forms/parts/formLabel'
import BottomPanel from 'components/forms/parts/bottomPanel'
import NavLink from 'components/forms/parts/navLink'
import ConfirmInfo from 'components/forms/parts//confirmInfo'
import useQueryParams from 'hooks/useQueryParams'

const ConfirmForm = () => {
  const confirmHash = useQueryParams().get('hash')
  return (
    <FormPanel>
      <FormLabel title='Account confirmation' />
      {confirmHash ? 
        (<ConfirmInfo>Ваш аккаунт успешно подтвержден</ConfirmInfo>) : 
        (<ConfirmInfo>Произшла ошибка</ConfirmInfo>)
      }
      <BottomPanel>
        <span>Перейти на страницу </span>
        <NavLink to="/login" text='авторизации' />
      </BottomPanel>
    </FormPanel>
  )
}

export default ConfirmForm

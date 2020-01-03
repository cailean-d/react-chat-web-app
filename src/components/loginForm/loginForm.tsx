import React from 'react'
import { FaUser, FaUnlockAlt } from 'react-icons/fa'
import { Link } from '@reach/router'
import s from './loginForm.module.scss'

const LoginForm = () => {
  return (
    <div className={s.formPanel}>
      <h2 className={s.formLabel}>Authorization</h2>
      <form autoComplete='off'>
        <div className={s.formField}>
          <FaUser className={s.formIcon} />
          <input className={s.input} type="text" placeholder="Name" name="name" />
          <div className={s.inputLine} data-line />
        </div>
        <div className={s.formField}>
          <FaUnlockAlt className={s.formIcon} />
          <input className={s.input} type="password" placeholder="Password" name="password" />
          <div className={s.inputLine} data-line />
        </div>
        <div className={s.submitPanel}>
          <button className={s.submitButton} type='submit'>Sign in</button>
        </div>
      </form>
      <div className={s.regPanel}>
        <span>Do not you have an account?</span>
        <Link className={s.regLink} to="/reg">Registration</Link>
      </div>
    </div>
  )
}

export default LoginForm
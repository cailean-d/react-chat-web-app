import React from 'react'
import { Link } from '@reach/router'
import s from 'components/forms/form.module.scss'

const NavLink = ({ text, ...rest }: any) => {
  return (
    <Link className={s.regLink} {...rest}>{text}</Link>
  )
}

export default NavLink

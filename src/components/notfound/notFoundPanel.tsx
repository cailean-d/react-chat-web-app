import React from 'react'
import { FaAngleDoubleLeft } from 'react-icons/fa'
import { Link } from '@reach/router'
import s from './notFoundPanel.module.scss'

const NotFoundPanel = () => {
  return (
    <div className={s.panel}>
      <h1 className={s.title}>404</h1>
      <div className={s.sorry}>Sorry</div>
      <div className={s.description}>The Page You're Looking for Was Not Found</div>
      <div className={s.btnContainer}>
        <Link to='/' className={s.btnBack}>
          <FaAngleDoubleLeft className={s.icon} />Go Back
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPanel

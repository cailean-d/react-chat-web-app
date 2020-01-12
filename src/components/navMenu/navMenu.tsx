import React from 'react'
import { FaSearch, FaUsers, FaStar, FaComments, FaCog, FaSignOutAlt } from 'react-icons/fa'
import s from './navMenu.module.scss'

const NavMenu = () => {
  return (
    <nav className={s.container}>
      <div className={s.item + ' '+ s.active}><FaSearch/></div>
      <div className={s.item}><FaUsers/></div>
      <div className={s.item}><FaStar/></div>
      <div className={s.item}><FaComments/></div>
      <div className={s.item}><FaCog/></div>
      <div className={s.item}><FaSignOutAlt/></div>
    </nav>
  )
}

export default NavMenu

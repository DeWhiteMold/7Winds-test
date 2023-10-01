import React, { FC } from 'react'
import { SvgIcon } from '@mui/material'
import './Header.scss'
import { Apps, Reply } from '@mui/icons-material'

const Header: FC = () => {
  return (
    <header className='header'>
      <div className="header__quick-btns">
        <button className="header__quick-btn">
          <SvgIcon component={Apps} color='secondary' />
        </button>
        <button className="header__quick-btn">
          <SvgIcon component={Reply} color='secondary' />
        </button>
      </div>
      <div className="header__menagment">
        <button className="header__menagment-btn header__menagment-btn_selected">Просмотр</button>
        <button className="header__menagment-btn">Управление</button>
      </div>
    </header>
  )
}

export default Header;
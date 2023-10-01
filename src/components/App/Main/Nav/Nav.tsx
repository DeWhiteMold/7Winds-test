import React, { FC } from 'react';
import './Nav.scss'
import { SvgIcon } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import { mockProjects } from '../../../../consts/consts';
import NavProject from './NavProject/NavProject';

const Nav: FC = () => {
  return (
    <nav className='nav'>
      <div className="nav__directory">
        <div className="nav__directory-text">
          <h2 className="nav__directory-name">Название проекта</h2>
          <span className="nav__directory-caption">Аббревиатура</span>
        </div>
        <button className="nav__directory-dropdown-btn">
          <SvgIcon component={KeyboardArrowDown} color='primary' />
        </button>
      </div>
      <ul className="nav__projects">
        {
          mockProjects.map((project) => {
            return <NavProject projectName={project} />
          })
        }
      </ul>
    </nav>
  )
}

export default Nav;
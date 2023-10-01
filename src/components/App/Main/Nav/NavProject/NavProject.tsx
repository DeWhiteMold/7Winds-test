import React, { FC } from 'react';
import './NavProject.scss'
import NavProjectProps from './NavProjectProps';
import { SvgIcon } from '@mui/material';
import { Dashboard } from '@mui/icons-material';

const NavProject: FC<NavProjectProps> = ({projectName}) => {
  return (
    <li className='nav-project'>
      <SvgIcon sx={{ fontSize: 22 }} component={Dashboard} color='primary' />
      <span className="nav-project__name">{projectName}</span>
    </li>
  )
}

export default NavProject;
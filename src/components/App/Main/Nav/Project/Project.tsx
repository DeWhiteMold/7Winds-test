import React, { FC } from 'react';
import './Project.scss'
import ProjectProps from './ProjectProps';
import { SvgIcon } from '@mui/material';
import { Dashboard } from '@mui/icons-material';

const Project: FC<ProjectProps> = ({projectName}) => {
  return (
    <li className='project'>
      <SvgIcon sx={{ fontSize: 22 }} component={Dashboard} color='primary' />
      <span className="project__name">{projectName}</span>
    </li>
  )
}

export default Project;
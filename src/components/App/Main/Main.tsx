import React, { FC } from 'react';
import './Main.scss'
import Nav from './Nav/Nav';
import Project from './Project/Project';

const Main: FC = () => {
  return (
    <main className='main'>
      <Nav />
      <Project />
    </main>
  )
}

export default Main;
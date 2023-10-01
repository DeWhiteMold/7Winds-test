import React, { FC } from 'react';
import './Main.scss'
import Nav from './Nav/Nav';

const Main: FC = () => {
  return (
    <main className='main'>
      <Nav />
    </main>
  )
}

export default Main;
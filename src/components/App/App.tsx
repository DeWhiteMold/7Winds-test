import React from 'react'
import Header from './Header/Header'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './App.scss'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../../consts/themeConsts'
import Main from './Main/Main'

function App() {
  return (
    <ThemeProvider theme={theme} >
      <div className="App">
        <Header />
        <Main />
      </div>
    </ThemeProvider>
  )
}

export default App

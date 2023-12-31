import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { NavBar } from './components/NavBar'
import { CoffeContextProvider } from './context/CoffeContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { darkTheme, defaultTheme } from './styles/themes/default'


export function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  function toggleTheme() {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : defaultTheme}>
      <BrowserRouter>
        <CoffeContextProvider>
          <NavBar toggleTheme={toggleTheme} stateDark={isDarkTheme} />
          <Router />
        </CoffeContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

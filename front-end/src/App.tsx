// @ts-nocheck
import { ThemeProvider } from 'styled-components';
import { UserNotes } from './components/UserNotes';
import { GlobalStyle } from './styles/global';
import  {themes} from './theme'
import { useState } from 'react';

export function App() {
  
  return (
    <ThemeProvider theme={themes['RoseTheme']}>
      <GlobalStyle/>
      <UserNotes></UserNotes>
    </ThemeProvider>
  )
}

export default App

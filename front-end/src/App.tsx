// @ts-nocheck
import { ThemeProvider } from 'styled-components';
import { ReminderNote } from './components/ReminderNote';
import { UserNotes } from './components/UserNotes';
import { GlobalStyle } from './styles/global';
import  {themes} from './theme'
import { useState } from 'react';

export function App() {
  
  const  [userNotes, setUserNotes] =useState([])
  // console.log(userNotes)
  
  return (
    <ThemeProvider theme={themes['RoseTheme']}>
      <GlobalStyle/>
      <ReminderNote notes={userNotes} setUserNotes={setUserNotes} ></ReminderNote>
      <UserNotes notes={[userNotes]} setUserNotes={setUserNotes} ></UserNotes>
    </ThemeProvider>
  )
}

export default App

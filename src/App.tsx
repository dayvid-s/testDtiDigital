import { ThemeProvider } from 'styled-components';
import { ReminderNote } from './components/ReminderNote';
import { GlobalStyle } from './styles/global';
import  {themes} from './theme'

export function App() {

  return (
    <ThemeProvider theme={themes['lightTheme']}>
      <GlobalStyle/>
      <ReminderNote></ReminderNote>
    </ThemeProvider>
  )
}

export default App

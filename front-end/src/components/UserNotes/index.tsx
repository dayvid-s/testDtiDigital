// @ts-nocheck
import { useState } from "react";

import { 
  Cadastro,
  Container,
  HeaderComponent,
  List,
  ListItem,
  NameArea,
  NameTask,
  NewStickyNoteText,
  ReminderNoteArea,
  SubmitArea,
  SubmitButton 
} from "./styles";

export function UserNotes({notes, setUserNotes}) {
  let datess=[new Date(2021,12,12), new Date(2021,12,12), new Date(2021,12,12), new Date(2021,12,12)]
  const [name,setName] = useState('')
  const [userDate, setUserDate] = useState<Date | null>()

  console.log(notes)
  return (

    
    <Container>

      {/* <HeaderComponent> */}
        <NewStickyNoteText>Meus lembretes:</NewStickyNoteText>  
        <Cadastro>
        <form >
        </form>
      </Cadastro>
      <List>
        {notes.map((note, index) => {
          return (
            <ListItem key={index}>
              <NameTask >{note}</NameTask>
              <div>
                <SubmitButton type="button" >Apagar</SubmitButton>
              </div>
            </ListItem>
          )
        })}
      </List>

    </Container>
    
    )
}

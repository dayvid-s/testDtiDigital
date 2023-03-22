// @ts-nocheck
import { 
  Container,
  ReminderNoteArea,
  List,
  ListItem,
  NameReminder,
  NewStickyNoteText,
  SubmitButton, 
} from "./styles";

export function UserNotes({notes, setUserNotes}) {
  return (
    <Container>
      <NewStickyNoteText>Meus lembretes:</NewStickyNoteText>  

      <ReminderNoteArea>
        <form >
        </form>
      </ReminderNoteArea>
      <List>
        {notes.map((note, index) => {
          return (
            <ListItem key={index}>
              <NameReminder >{note}</NameReminder>
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

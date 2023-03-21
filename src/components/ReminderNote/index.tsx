import { useState } from "react";
import { Container, HeaderComponent, NameArea, NewStickyNoteText, SubmitArea, SubmitButton } from "./styles";

export function ReminderNote() {
  const [name,setName] = useState('')
  const [date,setDate] = useState('')

  return (
    
    <Container>

      <HeaderComponent>
        <NewStickyNoteText>Criar novo lembrete:</NewStickyNoteText>  
      </HeaderComponent>
      

      <SubmitArea>
        <NewStickyNoteText>Nome</NewStickyNoteText>  
        <NameArea 
        placeholder="Nome do lembrete" 
        onChange={({ target }) => setName(target.value)} 
        />
      </SubmitArea>
        
      <SubmitArea>
        <NewStickyNoteText>Data</NewStickyNoteText>  
        <NameArea
          placeholder="Data do lembrete"
          onChange={({ target }) => setDate(target.value)} 
        />
      </SubmitArea>
      <SubmitButton type="button">Criar </SubmitButton>
    </Container>
    
    )
}

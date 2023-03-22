// @ts-nocheck
import { useState } from "react";
import {
  Container,
  HeaderComponent,
  NameArea,
  NewStickyNoteText,
  SubmitArea,
  SubmitButton
} from "./styles";
import compareAsc from 'date-fns/compareAsc'
import isDate from 'date-fns/isDate'
import format from "date-fns/format";


export function ReminderNote({notes, setUserNotes}) {
  const [name,setName] = useState('')
  const [userDate,setUserDate] = useState<Date >()

  const result = compareAsc(userDate, new Date()) // retorna 1 se a primeira data for posterior a segunda, e -1 pro oposto
  function validateReminder(){
    let error = false

    if (name === ''  ){
      let errorText = 'Dados incompletos'
      error = true
        alert('Não foi possível criar lembrete, por favor escreva o nome do lembrete')

    }
      if(isDate(userDate) === false || result=== -1){ 
        error= true
        alert('Não foi possível criar lembrete, por favor insira uma data válida, e maior que a de hoje.')
      }
  
    
    return !error    // it will just exit the function if has no errors.
  }
  function handleCreateReminderNote(){
    if(validateReminder()){
      // let userInfo={ name: name, userDate: ''}
      // var dateformated = format(userDate, 'dd/MM/yyyy')
      // let userInfo=[ name,  dateformated]
      // const dadosArray = [...notes, userInfo]
      // setUserNotes(dadosArray)
    
  }}

  return (
    
    <Container>

      <HeaderComponent>
        <NewStickyNoteText>Criar novo lembrete:</NewStickyNoteText>  
      </HeaderComponent>
      

      <SubmitArea>
        <NewStickyNoteText>Nome do lembrete</NewStickyNoteText>  
        <NameArea 
        placeholder="Ex: ir fazer revisão do carro..." 
        onChange={({ target }) => setName(target.value)} 
        />
      </SubmitArea>
        
      <SubmitArea>
        <NewStickyNoteText>Data do lembrete</NewStickyNoteText>  
        <NameArea
          type={"date"}
          placeholder="Data do lembrete"
          onChange={({ target }) => setUserDate(target.valueAsDate)} 
        />
      </SubmitArea>
      <SubmitButton 
        type="button"
        onClick={()=>{handleCreateReminderNote()}}  
      >Criar </SubmitButton>
    </Container>
    
    )
}

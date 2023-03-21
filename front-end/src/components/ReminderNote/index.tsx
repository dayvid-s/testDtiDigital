import { useState } from "react";
import { Container, HeaderComponent, NameArea, NewStickyNoteText, SubmitArea, SubmitButton } from "./styles";

export function ReminderNote() {
  const [name,setName] = useState('')
  const [userDate,setUserDate] = useState<Date | null>()

  function validateReminder(){
    let error = false

    if (name === '' || userDate ){
      let errorText = 'Dados incompletos'
      error = true
    }
    function toDate(dateStr: string) {
      var dateOfToday= new Date(dateStr.split('/').reverse().join('-') + ' 00:00:00')
      if(userDate instanceof Date && userDate > dateOfToday){ 
        console.log("é data válida")
        return
      }else{
        error= true
        alert('Não foi possível criar lembrete, por favor revise os campos.')
      }
      
      
    }
    const dataAtual = new Date();
    toDate(dataAtual.toLocaleDateString('pt-BR'))
  
    
    return !error    // it will just exit the function if has no errors.
  }
  function handleCreateReminderNote(){
    if(validateReminder()){
      {console.log('criou')}
      
    }else{
      
      // {console.log('não criou')}
      
    }
    
  }

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
        <NewStickyNoteText>Data</NewStickyNoteText>  
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

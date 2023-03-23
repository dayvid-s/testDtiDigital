// @ts-nocheck
import {
  Button,
  Container,
  Flex,
  Input,
  Item,
  Spacer
} from "./styles";

import { useState } from "react";
import compareAsc from 'date-fns/compareAsc'
import isDate from 'date-fns/isDate'
import format from "date-fns/format";
import { NameArea, SubmitButton } from "./styles";


export function UserNotes() {
  const [userNote, setUserNote] = useState("");
  const [userData, setUserData] = useState([]);
  const [userDate, setUserDate] = useState();
  
  const result = compareAsc(userDate, new Date()) // retorna 1 se a primeira data for posterior a segunda, e -1 pro oposto
  function validateReminder(){
    let error = false

    if (userNote === ''  ){
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


  function handleCreateReminderNote ()  {
    if (validateReminder()){
      const newUserNote = {
        id: Math.random(),
        userNote: userNote,
        date: format(userDate, 'dd/MM/yyyy'),
      };
      setUserData([...userData, newUserNote]);
      setUserNote("");
  }}


  const removeUserReminderNote = (id) => {
    const newList = userData.filter((userNote) => userNote.id !== id);
    setUserData(newList);
  };


  return (
    <Container>
      <h1 className="title">Aplicativo de lembretes</h1>
      <Spacer />

      <Flex direction="column">
        <Input
          value={userNote}
          placeholder="Nome do seu lembrete"
          onChange={(e) => setUserNote(e.target.value)}
        />
        <Flex direction="row">

        <h1>Data do lembrete</h1>
        <NameArea
        type={"date"}
        placeholder="Data do lembrete"
        onChange={({ target }) => setUserDate(target.valueAsDate)} 
        ></NameArea>
        </Flex>
        <Button onClick={handleCreateReminderNote}>Adicionar</Button>
      </Flex>
      <Spacer margin="16px" />

      <ul>
        {userData.map((userNote) => (
          <>
            <Item key={userNote.id}>
              <h1>{userNote.userNote}</h1>
              <h1>{userNote.date}</h1>
                <SubmitButton type='button'onClick={() => removeUserReminderNote(userNote.id)} >
                  Remover
                </SubmitButton>
              <Flex direction="row">
              </Flex>
            </Item>
            <Spacer margin="12px" />
          </>
        ))}
      </ul>
    </Container>
  );
}


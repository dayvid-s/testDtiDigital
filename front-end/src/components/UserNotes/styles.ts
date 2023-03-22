import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.backGround};
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom:320px
`
export const NewStickyNoteText = styled.h2`
    margin-left:30px;
    font-weight: 600;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: ${props => props.theme.onBackGround};
    max-width:50%;
`
export const SubmitArea = styled.div`
    display: flex;
    margin-top: 10px;
    `
export const SubmitButton = styled.button`
    background-color: #fd4646; 
    color: #fff;    
    padding-left:20px;
    padding-right:20px;
    padding-top:5px;
    padding-bottom:5px;
    border-radius: 5px;
    transition: filter 0.2s;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 400;

    &:hover{
        filter:brightness(0.8);
    }
    
`


export const ReminderNoteArea = styled.header`
  display:flex;
  justify-content: space-between;
  & form{
    display:flex;
    width: 100%;

    & input{
      margin-right: 0.5em;
    }
  }
`;

export const List = styled.div`
  margin-top: 0.5em;
  max-height: 60vh;
  overflow: auto;

  &::-webkit-scrollbar{
    width: 0px;
  }
`;

export const NameReminder = styled.span`
`;

export const ListItem = styled.div`
  margin-left:20px;
  display: flex;
  justify-content: space-between;
  margin-top: 0.5em;
  padding: 1em;
  background-color: #519;
  border-radius: 3px;
  max-width: 50%;
  & :where(div,svg){
    margin-left: 1em;
    cursor: pointer;
  }
`;
import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.backGround};

    /* display: flex; */
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    /* height: 100%; */
    padding-bottom:320px
/* height:100px */
`
export const HeaderComponent = styled.div`
    /* background-color: ${props => props.theme};  */
    display: flex;
    flex-direction: column;
`
export const ReminderNoteArea = styled.div`
    /* background-color: ${props => props.theme.rose};  */
    /* display: flex; */
    flex-direction: column;
    flex-wrap: wrap;
    
`
export const NewStickyNoteText = styled.h2`
    margin-left:30px;
    font-weight: 600;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: ${props => props.theme.onBackGround};
    max-width:50%;

    

/* background-color: ${props => props.theme.roseBlue};  */
/* display: flex; */
/* flex-direction: column */
`
export const SubmitArea = styled.div`
    /* background-color: ${props => props.theme.rose};  */
    display: flex;
    /* flex-direction: row; */
    /* justify-content: center; */
    margin-top: 10px;
    `
export const NameArea = styled.input`
    display: flex;
    /* max-height: 60%; */
    height: 30px;
    /* width: 50%; */
    padding:12px;
    padding-right:8px;
    padding-left:8px;
    border-width: 2px;
    border-color: ${props => props.theme.gray300};
    margin-left: 20px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    background-color:#fff;
    padding-right:-10px
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    `
export const SubmitButton = styled.button`
        background-color: #fd4646; 
        /* margin-top: 30px; */
        /* display: flex;
        justify-self: flex-end;
        align-self:flex-end; */
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
        
        /* padding */
        /* display: flex; */
        /* flex-direction: row; */
    `



/* export const Container = styled.div`
  padding: 1em;
  background: #6c63ff;
  width: 50vw;
  border-radius: 5px;

  & header{
    display: flex;
    align-items:center;
    justify-content: center;
    margin-bottom: 5px;
  }
`;
 */

export const Cadastro = styled.header`
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

export const NameTask = styled.span`
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
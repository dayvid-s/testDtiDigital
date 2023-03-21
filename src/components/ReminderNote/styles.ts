import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
export const HeaderComponent = styled.div`
    /* background-color: ${props => props.theme.rose};  */
    /* display: flex; */
    /* flex-direction: column; */
`
export const NewStickyNoteText = styled.h1`
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
    `
export const SubmitButton = styled.button`
        background-color: ${props => props.theme.rose}; 
        margin-top: 30px;
        display: flex;
        justify-self: flex-end;
        align-self:flex-end;
        color: #fff;    
        padding-left:20px;
        padding-right:20px;
        padding-top:5px;
        padding-bottom:5px;
        border-radius: 5px;
        transition: filter 0.2s;

        &:hover{
            filter:brightness(0.8);
        }
        
        /* padding */
        /* display: flex; */
        /* flex-direction: row; */
    `
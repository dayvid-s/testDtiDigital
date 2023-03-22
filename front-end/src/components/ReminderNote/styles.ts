import styled from "styled-components";

export const Container = styled.div`    
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.backGround}

`
export const HeaderComponent = styled.div`
`
export const NewStickyNoteText = styled.h1`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: ${props => props.theme.onBackGround}
`
export const SubmitArea = styled.div`
    display: flex;
    margin-top: 10px;
    `
export const NameArea = styled.input`
    display: flex;
    height: 30px;
    padding:12px;
    padding-right:12px;
    padding-left:8px;
    border-width: 2px;
    border-color: ${props => props.theme.gray300};
    margin-left: 20px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    background-color:#fff;
    padding-right:-10px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    `

export const SubmitButton = styled.button`
        background-color: ${props => props.theme.rose}; 
        margin-top: 30px;
        display: flex;
        color: #fff;    
        padding-left:20px;
        padding-right:20px;
        padding-top:5px;
        padding-bottom:5px;
        border-radius: 5px;
        transition: filter 0.2s;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

        &:hover{
            filter:brightness(0.8);
        }
        
    `
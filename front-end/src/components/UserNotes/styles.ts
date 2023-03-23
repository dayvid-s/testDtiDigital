// @ts-nocheck
import styled from 'styled-components'
export const Container = styled.div`
  width: 100%;
  min-height: 895px;
  // background: rgba(0, 0, 0, 0.1);
  background-color: ${props => props.theme.backGround};

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 25px;

  .title {
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;
    color: #000;
  }
`;

export const Input = styled.input`
  padding: 8px 24px;
  width: 224px;
  height: 50px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;

  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: black;

  &::placeholder {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: black;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  gap: ${(props) => props.gap || "16px"};
`;

export const Spacer = styled.div`
  width: 100%;
  margin: ${(props) => props.margin || "20px"};
`;

export const NameArea = styled.input`
    font-weight:1000;
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


export const Button = styled.button`
  width: 112px;
  height: 50px;
  background-color: ${props => props.theme.rose};

  border-radius: 10px;
  border: none;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #fbfbfb;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;

export const Item = styled.li`
  padding: 13px 10px 13px 24px;
  width: 354px;
  min-height: 50px;
  background: ${(props) => (props.checked ? "#da2535" : "#FFFFFF")};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  h1 {
    font-weight: 600;
    font-size: 16px;
    // line-height: 24px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    width: 80%;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
  }

 
    &:active {
      opacity: 0.6;
    }
  }

  i {
    font-size: 24px;
    color: ${(props) => (props.checked ? "#ffffff" : "#000000")};
  }
`
export const SubmitButton = styled.button`
    background-color: ${props => props.theme.roseBlue}; 
    padding-top:5px;
    padding-bottom:5px;
    display: flex;
    // font-weight:1000;
    color: white;    
    &:hover{
        filter:brightness(0.8);
    }
`

;
import styled from "styled-components";

const NotesSection = styled.section`
  label{ 
    background-color: #f5f5f5;
    padding: 0 16px;
    display: flex;
    align-items: center;
    > span{
      font-size: 14px; line-height: 22px; color: #333333;
      white-space: nowrap;
      margin-right: 16px;
    }
    > input{
      height: 73px;
      width: 100%;
      border: none;
      background: none;
    }
  }
`;

export {NotesSection};

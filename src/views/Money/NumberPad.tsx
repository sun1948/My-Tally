import styled from "styled-components";

const NumberPadSection = styled.section`
  output{
    display: block;
    font-size: 36px;
    line-height: 72px;
    text-align: end;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25);
  }
  .pad{
    > button{
      float: left;
      width: 25%; font-size: 18px; line-height: 22px; height: 64px;
      border: none;
      &.ok{ height: 128px; background: #8B8B8B; float:right;  }
      &:nth-child(1){
        background: #F2F2F2;
      }
      &:nth-child(2), :nth-child(5){
        background: #E0E0E0;
      }
      &:nth-child(3), :nth-child(6), :nth-child(9){
        background: #D3D3D3;
      }
      &:nth-child(4), :nth-child(7), :nth-child(10){
        background: #C1C1C1;
      }
      &:nth-child(8), :nth-child(11){
        background: #A9A9A9;
      }
      &.dot{background: #9A9A9A;}
      &.zero{ width: 50%; background: #A9A9A9;}
    }
  }
`;
export {NumberPadSection};
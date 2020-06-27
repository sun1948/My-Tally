import Icon from './Icon';
import styled from 'styled-components';
import React from 'react';

const TopbarWrapper = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center; 
  background: #fff;
  padding: 12px 16px;   
  .icon{ width: 22px;height: 22px; }
`;



type Props = {
  value: string;
  onClick : ()=>void;
}
export const Topbar: React.FC<Props> = (props) => {
  return (
    <TopbarWrapper>
      <Icon name="left" onClick={props.onClick}/>
      <span>{props.value}</span>
      <Icon/>
    </TopbarWrapper>
  );
};
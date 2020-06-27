import Icon from './Icon';
import styled from 'styled-components';
import React from 'react';
import { useHistory } from 'react-router-dom';

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
}
export const Topbar: React.FC<Props> = (props) => {
  const history = useHistory();
  const onClickBack = ()=>{
    history.goBack();
  }
  return (
    <TopbarWrapper>
      <Icon name="left" onClick={onClickBack}/>
      <span>{props.value}</span>
      <Icon/>
    </TopbarWrapper>
  );
};
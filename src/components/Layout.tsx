import Nav from './Nav';
import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height:100vh;
`;

const Content = styled.div`
  flex-grow:1;
`;

const Layout = (props:any) => {
  return (
    <Wrapper>
      <Content className={props.className}>
        {props.children}
      </Content>
      <Nav/>
    </Wrapper>
  );
};
export default Layout;
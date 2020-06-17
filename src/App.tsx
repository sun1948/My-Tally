import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav';

const Wrapper = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height:100vh;
`;

const Content = styled.div`
  flex-grow:1;
`

function App() {
  return (
    <Router>
      <Wrapper>
        <Content>
          <Switch>
            <Route path="/tag">
              <Tag/>
            </Route>
            <Route path="/money">
              <Money/>
            </Route>
            <Route path="/statistics">
              <Statistics/>
            </Route>
            <Redirect exact from="/" to="/tag"/>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
        </Content>
        <Nav/>
      </Wrapper>
    </Router>
  );
}

function Statistics() {
  return <h2>统计页面</h2>;
}

function Tag() {
  return <h2>标签页面</h2>;
}

function Money() {
  return <h2>记账页面</h2>;
}

function NoMatch() {
  return <div>你输入的路径不存在</div>;
}

export default App;
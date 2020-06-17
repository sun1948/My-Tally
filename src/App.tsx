import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height:100vh;
`;

const Content = styled.div`
  flex-grow:1;
`
const Nav = styled.div`
  border:1px solid black;
  > ul{
    display: flex;
    > li{
      width: 333333%;
      text-align: center;
      padding: 16px;
    }
  }
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
        <Nav>
          <ul>
            <li>
              <Link to="/tag">标签</Link>
            </li>
            <li>
              <Link to="/money">记账</Link>
            </li>
            <li>
              <Link to="/statistics">统计</Link>
            </li>
          </ul>
        </Nav>
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
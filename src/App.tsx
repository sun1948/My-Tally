import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Money from './views/Money';
import Tag from './views/Tag';
import Statistics from './views/Statistics';
import NoMatch from './views/NoMatch';
import styled from 'styled-components';

const AppWrapper = styled.div`
  color: #333;
`

function App() {
  return (
    <Router>
      <AppWrapper>
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
      </AppWrapper>
    </Router>
  );
}

export default App;
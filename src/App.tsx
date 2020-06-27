import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Money from './views/Money';
import Tags from './views/Tags';
import Statistics from './views/Statistics';
import NoMatch from './views/NoMatch';
import styled from 'styled-components';
import {Tag} from './views/Tag';
import {RecordItem} from './views/RecordItem';

const AppWrapper = styled.div`
  color: #333;
  max-width: 500px;
  margin: 0 auto;
`;

function App() {
  return (
    <Router>
      <AppWrapper>
        <Switch>
          <Route exact path="/tag">
            <Tags/>
          </Route>
          <Route exact path="/tag/:id">
            <Tag/>
          </Route>
          <Route exact path="/money">
            <Money/>
          </Route>
          <Route exact path="/statistics">
            <Statistics/>
          </Route>
          <Route exact path="/recordItem/:tagIds">
            <RecordItem/>
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
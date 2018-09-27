import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoginPage, ChatPage, NotFoundPage } from '../pages';

const App = () => (
  <Switch>
    <Route path="/login" component={LoginPage} />
    <Route path="/chat" component={ChatPage} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default App;

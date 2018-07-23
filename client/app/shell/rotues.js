import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import GuardGenerator from './guardGenerator';

export default () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/guardGenerator' component={GuardGenerator} />
  </Switch>
);

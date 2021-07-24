import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { Dashboard, Users, Products } from './pages';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/produtos" component={Products} />
        <Route path="/usuarios" component={Users} />
      </Switch>
    </Router>
  );
};

export default Routes;

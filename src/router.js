import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { Dashboard, Clientes, Products } from './pages';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/produtos" component={Products} />
        <Route path="/clientes" component={Clientes} />
      </Switch>
    </Router>
  );
};

export default Routes;

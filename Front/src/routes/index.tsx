import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Cadastro from '../pages/cadastro';
import Update from '../pages/update';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Cadastro" component={Cadastro} />
    <Route path="/update" component={Update} />
  </Switch>
);

export default Routes;

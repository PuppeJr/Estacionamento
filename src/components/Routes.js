import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CadastroPage from './CadastroPage';
import ListaPage from './ListaPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CadastroPage} />
        <Route path="/lista" component={ListaPage} />
      </Switch>
    </Router>
  );
};

export default Routes;

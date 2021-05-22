import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { HOME } from './config/router/paths';
import { Home } from './screens/Home';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path={HOME} component={Home} exact />
      </Switch>
    </HashRouter>
  );
}

export default App;

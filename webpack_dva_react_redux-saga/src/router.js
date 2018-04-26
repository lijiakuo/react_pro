import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';
import App from './App'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={App} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;

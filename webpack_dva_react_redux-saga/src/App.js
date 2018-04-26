import React from 'react';
import {  Router, Route, Switch ,Redirect} from 'dva/router';
import {ROUTER_MAP} from './router/routerMap'
import test from '../src/views/test/test'
import RouterCom from '../src/component/Routers'
import Footer from './component/common/Footer'
import FootItem from './component/common/Footer/FootItem'
import Header from './component/common/Header'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Redirect  exact from="/" to="/index/home"></Redirect>
        <RouterCom routers={ROUTER_MAP.ROUTER_VIEW}></RouterCom>
      </Switch>
    </Router>
  );
}
export default RouterConfig;
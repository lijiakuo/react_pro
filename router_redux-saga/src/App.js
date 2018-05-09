import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ROUTER_MAP} from './router/routerMap'
import Main from './component/common/Main'
import Header from './component/common/Header'
import Footer from './component/common/Footer'
import FootItem from './component/common/Footer/FootItem'
import RouterCom from './component/Routers'
import {
  Switch,
  NavLink,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom'
console.log(ROUTER_MAP);
class App extends Component {
  render() {
    const {location}=this.props;
    return (
      <div className="App">
        <div className='wrap'>
          <Switch>
            <Redirect  exact from="/" to="/index/home"></Redirect> 
            <RouterCom routers={ROUTER_MAP.ROUTER_VIEW}></RouterCom>
          </Switch>
          </div>
      </div>
    );
  }
}

export default   withRouter(App);

// require(' isomorphic-fetch');
import React,{Component} from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import {ROUTER_MAP} from './router/router.config'
import RouterCom from '../src/components/Routers'
import './static/css/reset.css'
import './static/fontSize/iconfont.css'
import {Provider} from 'react-redux' 
import store from './store/store'
// console.log(process.env);
//switch 它的特性是我们只渲染所匹配到的第一个路由组件，
//一般界面渲染的时候，会渲染所有匹配到的路由组件。它的
//孩子节点只能是Route组件或者Redirect组件。
console.log(ROUTER_MAP)
ReactDom.render(
  <Provider store={store}>
    <Router>
      <Switch>
        {/*{/*重定向 exact  写在前面   from to */}  */}
         <Redirect  exact from="/" to="/index/home"></Redirect> 
        <RouterCom routers={ROUTER_MAP.ROUTER_NAV}></RouterCom>
      </Switch>
    </Router>
  </Provider>
  ,
  document.querySelector('#root')
)


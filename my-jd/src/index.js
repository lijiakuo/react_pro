import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './assets/fontSize/iconfont.css'
import './assets/css/reset.css'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import mock from './mock'
import {Provider} from 'react-redux'
// import {createStore} from 'redux'
import store from './store'
// const store = createStore((state={name:'ljk',age:27,jdList:null},action)=>{
//   console.log(action);
//   switch(action.type){
//     case 'CHANGE_NAME':
//       return {...state,name:'yhl'}
//     case 'CHANGE_AGE':
//       return {...state,age:action.age}
//     case 'GET_JDLIST':
//       return {...state,jdList:action.jdList}
//     default:
//       return state 
//   }
//   //state是一个对象树
//   // return {...state,age:9} //返回newState
// })//仓库reducer参数是一个函数
 //store是一个全局数据 需要放在组件的最顶层<Provider>
//判断是线上还是线下，如果是线下操作可以使用mock,如果是线上使用真实数据
if(process.env.NODE_ENV==="development"){
  mock()
}
ReactDOM.render( 
  <Provider store={store()}>
     <Router>
      <App/> 
    </Router>
  </Provider> 
 
,
 document.getElementById('root')
);
registerServiceWorker();
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import './assets/css/reset.css'
// import './assets/fontSize/iconfont.css'
// import mock from './mock'
import dva from 'dva'
import './index.css'
import './assets/css/reset.css'
import axios from 'axios'
import mock from './mock'
mock()
//1.Initialize初始化
const app = dva();
app.model({ 
  namespace:'count',
  state:0,
  reducers:{
    add(state,action){
      console.log(state,action)
      if(action.playload){
        return state+= action.playload
      }
      return ++state
    }
  }
})
app.model({//相当于一个redux
  namespace:'dataCans',//名字很重 combineReducers中对应的key值
  state: [],
  reducers:{
    saveCans(state,action){
      console.log(action)
      state = action.payload
    return state
    }
  },
  effects:{
    *getCans({payload},{put,call}){
      //参数action sagaApi
     let aaa = yield call(axios.get,'/api/jsList')
     console.log(111)
      console.log(aaa);
      yield put({
        type:'saveCans',
        payload:aaa.data
      })
    }
  }
})
//2.Plugins 
//app.use({})
//3.Model
// app.model(require('./models/example').default);
// 4. Router
app.router(require('./App').default);

// 5. Start
app.start('#root');

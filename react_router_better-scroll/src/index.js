import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './assets/css/reset.css'
import './assets/fontSize/iconfont.css'
import mock from './mock'
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter as Router} from 'react-router-dom'
mock();
ReactDOM.render(
 <Provider store={store()}>
  <Router>
    <App />
  </Router></Provider>    , 
  document.getElementById('root'));
registerServiceWorker();

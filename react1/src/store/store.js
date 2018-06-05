import { createStore, applyMiddleware } from 'redux';
//applyMiddleware中间件
import createSagaMiddleware from 'redux-saga'; //是一个func 函数 需要创建中间件 也就是调用
import reducers from './reducers';
import logger from 'redux-logger'; //applyMiddleware(logger)记录操作信息 就是一个中间件
import sagas from './sagas'
let sagaMiddleware = createSagaMiddleware();
let store = createStore(reducers, applyMiddleware(logger), applyMiddleware(sagaMiddleware))
sagaMiddleware.run(sagas) //相当于监听
export default store
// ui触发 => action作用于（reducer） => middleware (action与reducer中间件)=> reducer => store
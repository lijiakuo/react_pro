import {createStore,applyMiddleware} from  'redux'
//applyMiddleware中间件
import createSagaMiddleware from 'redux-saga'
//是一个function函数 需要创建中间件 也就是调用
import logger from 'redux-logger'
//applyMiddleware(logger)记录操作信息 就是一个中间件
import reducers from './reducers'
import sagas from './sagas'
let sagaMiddleware = createSagaMiddleware();
let store=createStore(reducers,applyMiddleware(logger),applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas)//监听
export default store
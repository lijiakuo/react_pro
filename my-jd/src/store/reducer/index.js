import { combineReducers } from 'redux'
import home from './home'
import my from './my'
import classify from './classify'
import year from './year'
import shopcar from './shopcar'
import detail from './detail'
import login from './login'
import cone from './cone'
const rootReducer = combineReducers({ //合并reducer
    home,
    my,
    shopcar,
    year,
    classify,
    detail,
    login,
    cone
})
export default rootReducer
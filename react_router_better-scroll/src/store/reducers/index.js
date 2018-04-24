import { combineReducers } from 'redux'
import classify from './classify'
import home from './home'
const rootReducer = combineReducers({
    classify,
    home

})
export default rootReducer
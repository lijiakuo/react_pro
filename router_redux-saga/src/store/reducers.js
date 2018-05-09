import {combineReducers} from 'redux' 
export const GET_LIST_X = 'GET_LIST_X'
export const GET_LIST_ERROR = 'GET_LIST_ERROR'
let initState = {
  dataList:null,
  name:'ljk' 
}
const home_list = (state = initState,action)=>{
    switch(action.type){
      case GET_LIST_X:
        return {...state,dataList:action.data}
      case GET_LIST_ERROR:
        return {...state,dataList:action.data}
      default:
        return state
    }
}
export default combineReducers({
    home_list
})
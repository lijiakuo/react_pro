import {takeEvery,takeLatest} from 'redux-saga' 
import {call,put} from 'redux-saga/effects'
import {$http} from '../utils/http'
function* fetchData(){ 
  try {
    let res = yield call($http.post,'/user/Mail/addNew',{name:'ljk'})
    yield put({
      type:"GET_LIST_X",
      data:res 
    })
  } catch(err){
    console.log(err)
    yield put({
      type: "GET_LIST_ERROR",
      data:err
    })
  }
}
export default function* watchFetch(){
  //takeEvery(takeLatest)监听type
  yield takeLatest('GET_LIST',fetchData)
}
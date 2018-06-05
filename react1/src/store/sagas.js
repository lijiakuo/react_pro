import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { $http } from '../utils/http'
//每一个saga就是一个sagagenerator函数
//saga就是generator函数
//worker saga

function* fetchData() {
        //使用call去请求数据,call(fn,param)即fn(param)
        //实现异步转同步
        try {
            let res = yield call($http.post, '/api/index/getListDatas', { channel_id: 3 })
                // console.log(res)
                // yield ///
                // yield ///
                //saga中替代dispatch来触发action的函数

            console.log('请求成功')
            yield put({
                type: 'TEST_SAGA',
                data: JSON.parse(res)
            })
        } catch (err) {
            yield put({
                type: "TEST_SAGA_ERROR",
                data: err
            })
        }

    }
    //worker saga
export default function* watchFetch() {
    //监听takeEvery 每一个type为GET_GOODS_LIST 的action
    // yield takeEvery('GET_GOODS_LIST', fetchData)
    yield takeLatest('GET_GOODS_LIST', fetchData)

    //GET_GOODS_LIST监听多个可以使用数组
}
import * as types from '../actionTypes/login'
export const getLoginSucc = (datas) => {
        return (dispatch, getState) => {
            dispatch({
                type: types.GET_LOGIN_SUCC,
                loginDatas: datas
            })
        }
    }
    // export const getLoginReq = () => {
    //     return {}
    // }
import * as types from '../actionTypes/shopCarTypes'
export const getShopc = (shopDatas) => {
    // return {
    //     type: types.GET_SHOPC_SUCC,
    //     shopDatas
    // }// 第一种方法
    return (dispatch, getState) => { //方法2
        dispatch(resShopC())
        dispatch({
            type: types.GET_SHOPC_SUCC,
            shopDatas
        })
    }
}
export const resShopC = () => {
    return {
        type: types.GET_SHOPC_RES
    }
}
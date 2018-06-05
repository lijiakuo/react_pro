import * as types from '../actionTypes/year'
export const getYearActionSucc = (yearDatas) => {
    return {
        type: types.GET_YEAR_SUCC,
        yearDatas: yearDatas
    }
}
export const getYearActionReq = () => {
    return {
        type: types.GET_YEAR_REQ

    }
}
export const getYearActionErr = () => {
    return {
        type: types.GET_YEAR_ERR

    }
}
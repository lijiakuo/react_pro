import * as types from '../actionTypes/classify'
export const getClassifyFn = (classifyDatas) => {
    return (dispatch, getState) => {
        dispatch(resClassify())
        dispatch({
            type: types.GET_CLASSIFY_SUCC,
            classifyDatas
        })
    } 
}
export const resClassify = () => {
    return {
        type: types.GET_CLASSIFY_RES
    }
}
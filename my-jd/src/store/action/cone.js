import * as types from '../actionTypes/cone'
export const getConeAction = (content) => {
    return (dispatch, getState) => {
        dispatch({
            type: types.GET_CONE_SUCC,
            content
        })
    }
}
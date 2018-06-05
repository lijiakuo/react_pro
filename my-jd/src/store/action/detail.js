import * as types from '../actionTypes/detail'
export const getComList = (detailComList) => {
    return {
        type: types.GET_COM_LIST,
        detailComList
    }
}
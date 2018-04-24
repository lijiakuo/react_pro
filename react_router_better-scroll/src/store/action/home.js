export const getHomeFn = (homeList) => {
    return (dispatch, getState) => {
        console.log(homeList)
        dispatch(resHome())
        dispatch({
            type: 'GET_HOME_SUCC',
            homeList
        })
    }
}
export const resHome = () => {
    return {
        type: 'GET_HOME_RES'
    }
}
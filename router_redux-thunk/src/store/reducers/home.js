const init = {
    name: 'home',
    homeList: null,
    startInd: 0,
    endInd: 4
}
const reducer = (state = init, action) => {
    switch (action.type) {
        case 'GET_HOME_RES':
            return {...state, homeList: null }
        case 'GET_HOME_SUCC':
            return {...state, homeList: action.homeList }
        default:
            return state
    }
}
export default reducer
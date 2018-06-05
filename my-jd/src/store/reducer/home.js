const initalState = {
    name: 'home'
}
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case 'GET_JDLIST':
            return {...state, jdList: action.jdList }
        default:
            return state
    }
}
export default reducer
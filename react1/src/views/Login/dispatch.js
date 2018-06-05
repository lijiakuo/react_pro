import { USER_INFO } from '../../store/reducers'
export const mapDispatchToProps = (dispatch) => {
    return {
        saveUser(data) {
            dispatch({
                type: USER_INFO,
                data
            })
        }
    }
}
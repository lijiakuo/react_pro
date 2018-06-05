export const mapStateToProps = ((state) => {
    let userInfo = null;
    console.log(state.user_info + '11')
    console.log(!!state.user_info)
    if (!!state.user_info) {

        userInfo = JSON.parse(localStorage.getItem('user-info'))

    } else {
        userInfo = state.user_info
    }
    return {
        userInfo
    }
})
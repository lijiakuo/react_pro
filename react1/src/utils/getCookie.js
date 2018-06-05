export function getCookie(name) {
    let cookieStr = document.cookie;
    // console.log(cookieStr)
    let arr;
    let res = null;
    if (cookieStr.length == 0) return
    if (cookieStr.indexOf(';') > -1) {
        arr = cookieStr.spilt(';')
        arr.forEach((item, index) => {

            let tmp_arr = item.split('=');
            if (tmp_arr[0] == name) {
                res = tmp_arr[1]
            }
        })
    } else {
        let tmp_arr = cookieStr.split('=');
        if (tmp_arr[0] == name) {
            res = tmp_arr[1]
        }
    }
    return res
}
export function loginOut() {
    let t = new Date()
    t.setTime(t.getTime() - 1)
    document.cookie = "token=" + getCookie('token') + ';expires=' + t.toUTCString()
}
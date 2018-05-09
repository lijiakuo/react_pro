// 基于fetch封装的请求方法，支持post和get
// 同源策略:1.协议相同 2.域名相同 3.端口号相同
let domin;
if (process.env.NODE_ENV == 'development') {
    domin = "http://localhost:9000"
}
if (process.env.NODE_ENV == 'prodution') {
    domin = 'http://www.lb717.com'
}
export const $http = {
    get(url, data) {
        if (typeof data != 'object') {
            return {
                then(callback) {
                    callback('get请求入参格式不正确，需要传object')
                    return {
                        catch (err) {
                            err(new Error('入参格式不正确'))
                        }
                    }
                }
            }
        }
        let queryString = '?';
        for (let i in data) {
            queryString += i + '=' + data[i] + '&'
        }
        url = encodeURI(url + queryString.slice(0, -1))
        console.log(url)
        return fetch(domin + url, {
            headers: {
                "content-type": "application/json;charset=utf-8"
            }
        }).then(res =>

            res.json()
        )
    },
    post(url, data) {

        if (typeof data != 'object') {
            return {
                then(callback) {
                    callback('get请求入参格式不正确，需要传object')
                    return {
                        catch (err) {
                            err(new Error('入参格式不正确'))
                        }
                    }
                }
            }
        }

        return fetch(domin + url, {
            body: JSON.stringify(data), //字符串
            headers: { //客户端响应头信息
                "Content-Type": "application/json;charset=utf-8",
                "Token": "1a33ab8cdc51fa288de47bf7c99f197a"
            },
            method: "POST"
        }).then(res => res.json())
    },
    //动态创建script标签，添加到body，src指定接口地址，准备callback name
    jsonp(url, callbackName) {
        return new Promise((resolve, reject) => {
            window[callbackName] = function(data) {
                resolve(data)
            }
            let script = document.createElement('script')
            let body = document.body;

            script.src = url;
            body.appendChild(script);
        })

    }
}
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const api = require('./api')

console.log(api)
app.use(bodyParser.json()) //解析数据 
    //设置跨域curs 
app.all('*', (req, res, next) => {
    // res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Origin", "http://localhost:3000")
        //响应头类型
    res.header("Access-Control-Allow-Headers", "Content-Type,Token")
        //响应的类型是utf-8
    res.header("Content-Type", "application/json;charset=utf-8")
        //第一个*表示发起任意路径的请求都可以跨域
        //第二个*表示任意一个域名访问这个服务器的接口都可以访问到，不受限制
        //localhost:3000只允许这个跨域
    next()
})
api(app)
app.listen(9000, function() {
    console.log('liston to 9000...')
})
import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import mysql from 'mysql'
import { getAes, getDeAes } from './modules/utils'
import { getMysql } from './modules/getMysql'
const app = express();
import { aa } from './config/router'
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.resolve('static')))
let startTime = new Date().getTime() / 1000;
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
        // 响应头类型
    res.header("Access-Control-Allow-Headers", "Content-Type,Token")
        //响应的类型是utf-8
    res.header("Content-Type", "application/json;charset=utf-8")
        //第一个*表示发起任意路径的请求都可以跨域
        //第二个*表示任意一个域名访问这个服务器的接口都可以访问到，不受限制
        //localhost:3000只允许这个跨域
    let { name } = req.body;
    console.log(req.body)
        // console.log(req.body)
    let { token } = req.headers;
    // console.log(token)
    let time = 1000000;
    // console.log(name)
    // console.log(req.body)
    // console.log(12321412443)
    if (name) { //表示第一次登陆
        next()
    } else if (!name && !token) {
        res.json({
            code: '0',
            info: '鉴权失败'
        })
    } else {
        let endTime = new Date().getTime() / 1000 - startTime;
        if (endTime > time) {
            let info = getAes(token)
            res.json({
                code: 0,
                info: '登录超时'
            })
        } else {
            console.log('未超时')
            next()
        }

    }
    // console.log(1);

    // next()
})
aa(app)
app.listen(9527, function() {
    console.log('listen to 9527')
})
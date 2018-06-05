const http = require('http')
const querystring = require('querystring')
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const _ = require('lodash')

function queryApi(url, methods, params) { 
    return new Promise((resolve, reject) => {
        let data = '';
        const options = {
            hostname: 'www.lb717.com',
            port: 80,
            path: url,
            method: methods,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset-UTF-8'
            }
        };
        let request = http.request(options, (response) => {
            response.setEncoding('utf8');
            response.on('data', (chunk) => {
                data += chunk;
            });
            response.on('end', () => {
                resolve(JSON.stringify(data))
            });
        })
        if (methods.toLowerCase() == 'post') {
            request.write(querystring.stringify(params))
        }
        request.end()
    })

}
module.exports = function(app) {
    app.post('/api/index/getListDatas', (req, res) => {
        queryApi('/mall/index/getGoodsChannel', 'post', req.body)
            .then(data => {
                res.end(data)
            })
    })


    //注册接口
    app.post('/api/register', (req, res) => {
            console.log(req.body)
            let user = fs.readFileSync('server/user.json', { encoding: 'utf-8' })
            user = JSON.parse(user);
            user.forEach((val, index) => {
                if (req.body.user === val.user) {
                    res.end(JSON.stringify({
                        "error": 0,
                        "info": "用户名已经存在,请重新注册"
                    }))
                } else {
                    user.push(req.body)
                    fs.writeFile('server/user.json', JSON.stringify(user), function() {
                            res.end(JSON.stringify({
                                "success": 1,
                                "info": '成功'
                            }))
                        })
                        //返回信息 1 成功
                }
            })

        })
        //登录接口
    app.post('/api/login', (req, res) => {
            console.log(req.body); //客户端传递过来的信息
            let user = fs.readFileSync('server/user.json', { encoding: "utf-8" })
            user = JSON.parse(user);
            let resInfo = {
                success: 0,
                info: "用户名或密码错误",
                token: '',
                name: null,
                time: null,
                nockName: null
            }
            user.forEach((val, index) => {
                if (req.body.user === val.user && req.body.pwd === val.pwd) {
                    resInfo.success = 1;
                    resInfo.info = "登录成功";
                    resInfo.user = {
                        name: req.body.user,
                        time: new Date().toLocaleDateString(),
                        nockName: 'jk'

                    }
                }
                //返回信息 1 成功
            })
            if (resInfo.success == 1) {
                resInfo.token = jwt.sign(req.body, '1511', {
                    expiresIn: 60 * 600
                })
                console.log(resInfo.token)
            }
            res.end(JSON.stringify(resInfo))
        })
        //添加购物车
    app.post("/user/car/addCar", (req, res) => {
            // console.log(req.body);
            //对token解密
            jwt.verify(req.body.token, "1511", (err, decoded) => {
                //decoded解码
                if (err) {
                    console.log(err);
                    res.end(JSON.stringify({
                        info: "登陆过期,请重新登录",
                        detail: err.TokenExpiredError
                    }))
                } else {
                    let carInfo = JSON.parse(fs.readFileSync('server/car_info.json', { encoding: 'utf-8' }))
                    console.log(carInfo + '1')
                    if (carInfo[decoded.user]) {
                        let recodeList = carInfo[decoded.user];
                        let flag = false; //新添加商品
                        recodeList.forEach((item, index) => {
                            if (item.goods_id == req.body.goods_info.goods_id) {
                                ++item.count;
                                flag = true //重复商品
                            }
                        })
                        if (!flag) {
                            let record = req.body.goods_info;
                            record.count = 1;
                            record.checked = 0;
                            // carInfo[decoded.user] = [record]
                            carInfo[decoded.user].push(record)
                        }

                    } else {
                        let record = req.body.goods_info;
                        record.count = 1;
                        record.checked = 0;
                        carInfo[decoded.user] = [record]
                    }
                    fs.writeFile("server/car_info.json", JSON.stringify(carInfo), function() {
                        res.end("1")
                    })
                }
                console.log(decoded)

            })
            res.end('1')
        })
        //分类接口
    app.get('/api/classify', (req, res) => {
            console.log(req.query)
            queryApi('/mobile/Category/categorySon' + '?' + querystring.stringify(req.query), 'get')
                .then(data => {
                    res.json(data)
                })
                // res.json(1)
        })
        //登录后获取购物车的商品记录
    app.post('/user/car/goodsList', (req, res) => {
            console.log(req.body)
            jwt.verify(req.body.token, "1511", (err, decoded) => {
                //decoded解码
                if (err) {
                    res.end(JSON.stringify({
                        info: '登录过期,请重新登录',
                        detail: err.TokenExpiredError,
                        error: 1
                    }))
                } else {
                    console.log(1234)
                    try {
                        let goodsRecord = JSON.parse(fs.readFileSync('server/car_info.json', { encoding: 'utf-8' }))
                            // console.log(goodsRecord)
                        let goodsUser = goodsRecord[decoded.user] || [];
                        console.log(goodsUser)
                        res.json(goodsUser)
                    } catch (err) {
                        res.json(err)
                    }

                }
            })

        })
        //删除购物车指定商品
    app.post('/user/car/deleteGoods', (req, res) => {
        console.log(req.body)
        let carRecord = JSON.parse(fs.readFileSync('server/car_info.json', { encoding: 'utf-8' }))
            // console.log(carRecord)
        jwt.verify(req.body.token, "1511", (err, decoded) => {
            if (err) {
                res.end(JSON.stringify({
                    info: '登录过期,请重新登录',
                    detail: err.TokenExpiredError,
                    error: 1
                }))
            } else {
                let carList = carRecord[decoded.user];
                console.log(req.body.checkedId)
                let delGoods = _.remove(carList, (item) => {
                    return req.body.checkedId.indexOf(item.goods_id) > -1
                })
                console.log(carList);
                carRecord[decoded.user] = carList;
                fs.writeFile('server/car_info.json', JSON.stringify(carRecord), function() {
                    res.json({
                        success: 1,
                        info: '删除成功',
                        delGoods,
                        carList
                    })
                })

            }
        })

        // res.end('1')
    })
    app.post('/user/Mail/addNew', (req, res) => {
        console.log(req.body)
        jwt.verify(req.body.token, '1511', (err, record) => {
                console.log(record)
                if (err) {
                    res.end(JSON.stringify({
                        info: '登录过期,请重新登录',
                        detail: err.TokenExpiredError,
                        error: 1
                    }))
                } else {
                    let deList = JSON.parse(fs.readFileSync('server/deList.json', { encoding: 'utf-8' }))
                    let user = record.user;
                    delete req.body.token;
                    if (deList[user]) {
                        deList[user].push(req.body)
                    } else {
                        deList[user] = [req.body]
                    }
                    fs.writeFile('server/deList.json', JSON.stringify(deList), function(err) {
                        if (err) {
                            res.json(err);
                        } else {
                            res.json({
                                success: '1',
                                info: '地址添加成功'
                            })
                        }
                    })
                }

            })
            // res.end('1123')
    })
}
import express from 'express'
import crypto from 'crypto'
import mysql from 'mysql'
import { getMysql } from '../modules/getMysql'
import { getAes, getDeAes } from '../modules/utils.js'
const router = express.Router();
router.post('/login', (req, res, next) => {
    const { token } = req.headers;
    console.log(token)
    if (token) {
        let user = getDeAes(token)
        getMysql(user, function(result) {
            res.json({
                code: result.code,
                info: result.info,
                data: result.data
            })
        })
    } else {
        console.log('sdfjksfdjkd')
        getMysql(req.body.name, function(result) {
            if (result.code == 1) {
                console.log('有')
                res.json({
                    code: result.code,
                    info: result.info,
                    data: result.data,
                    token: getAes(req.body.name)
                })
                next()
            } else {
                console.log('没有')
                res.json({
                    code: result.code,
                    info: result.info
                })
            }

        })
    }
})
export default router
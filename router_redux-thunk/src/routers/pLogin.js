import express from 'express'
import { getMysql } from '../modules/getMysql'
import { getAes, getDeAes } from '../modules/utils'
const router = express.Router();
const pLogin = router.post('/pLogin', (req, res) => {
    if (req.body.name) {
        getMysql(req.body.name, function(result) {
            res.json({
                code: result.code,
                info: result.info,
                data: result.data
                    // token: getAes(req.body.name)
            })
        })
    } else {
        console.log('11111111111111111');
        console.log(req.headers.token)
        let { token } = req.headers;
        getMysql(getDeAes(token), function(result) {
            res.json({
                code: result.code,
                info: result.info,
                data: result.data
                    // token: getAes(req.body.name)
            })
        })
    }

})
export default pLogin
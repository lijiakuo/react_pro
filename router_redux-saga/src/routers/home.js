import express from 'express'
import { getAes, getDeAes } from '../modules/utils'
import { getMysql, getList } from '../modules/getMysql'
import { connect } from 'react-redux'
// @connect(mapStateToProps)

const router = express.Router();
const home = router.post('/home', (req, res) => {
    // console.log(req.headers.token)
    console.log(req.body)
    let { token } = req.headers;
    // console.log(req.body)
    getMysql(getDeAes(token), function(result) {
        // console.log(result)
        if (result.data.length > 0) {
            getList(req.body, function(res1) {
                // console.log('ljk')
                res.json({
                    code: res1.code,
                    info: res1.info,
                    data: res1.data
                })
            })
        } else {
            return
        }
    })
})
const mapStateToProps = (state, props) => {
    return {}
}
export default home
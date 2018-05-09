import mysql from 'mysql'
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "1002",
    database: "test"
})
const getMysql = (userInfo, callback) => {
    connection.query('select * from  jk where name=?', [userInfo], (err, result) => {
        if (err) {
            throw new Error(err)
        } else {
            let len = result.length;
            if (len > 0) {
                callback({
                    code: 1,
                    info: '请求成功',
                    data: result
                })
            } else {
                callback({
                    code: 0,
                    info: '没有此用户'

                })
            }

        }
    })
}
const getList = (userInfo, callback) => {
    console.log(userInfo)

    connection.query(`select * from  lists limit ${userInfo.s*4} , ${userInfo.e}`, (err, result) => {
        // console.log(result)
        callback({
            code: 1,
            info: '请求成功',
            data: result
        })
    })
}
export { getMysql, getList }
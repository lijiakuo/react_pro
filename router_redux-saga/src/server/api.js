const http = require('http')
const querystring = require('querystring')
const express = require('express')
const app = express();
const bodyParser = require('body-parser')

const fs = require('fs')
const _ = require('lodash')
const arr = require('./test.json')
console.log(arr);
module.exports = function(app) {
    app.post('/user/Mail/addNew', (req, res) => {
        console.log(req.body)
        res.json(arr)
    })
}
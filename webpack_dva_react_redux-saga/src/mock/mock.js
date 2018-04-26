import Axios from 'axios'
import AxiosMock from 'axios-mock-adapter'
import {arr,arrList }from './datas/content'
const mock = new AxiosMock(Axios)
const jdDatas = () => {
    mock.onGet('/api/jsList').reply((config) => {
            return new Promise((resolve, reject) => {
                resolve([200, arr])
            })
        }) //开始拦截
    mock.onGet('/api/conList').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, arrList])
        })
    }) //开始拦截
}
export default jdDatas
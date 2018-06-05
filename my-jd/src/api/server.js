import axios from 'axios'
import { SHOPDATAS, LOGIN, CONE, YEAR } from './interface'
export const getShopDatas = () => {
    return axios.get(SHOPDATAS)
}
export const getLogin = (params) => {
    return axios.post(LOGIN, params)
}
export const getCone = (params) => {
    return axios.post(CONE, params)
}
export const getYear = (params) => {
    return axios.post(YEAR, params)
}
import axios from 'axios'
import { CLASSIFY } from './interface'
import { $http } from '../utils/http'
// let domin = "";
export const getClassify = (params) => {
    return axios.post(CLASSIFY)
}
export const getHome = (params) => {
    return $http.post('/home', params)
} 
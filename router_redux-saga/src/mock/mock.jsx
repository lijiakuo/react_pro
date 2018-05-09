import Axios from 'axios'
import AxiosMock from 'axios-mock-adapter'
import {objCon ,arr} from './datas/content.js'
const mock=new AxiosMock(Axios);
const listDatas=()=>{

  mock.onPost('/api/classifyDatas').reply(()=>{
    return new Promise((resolve,reject)=>{
      resolve([200,objCon])
    })
  })
}
export default listDatas
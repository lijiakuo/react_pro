import Axios from 'axios'
import AxiosMock from 'axios-mock-adapter'
import jsLists from './datas/jdList.json'
import jsComList from './datas/jdComList.json'
import shopDatas from './datas/shopDatas.json'
import { SHOPDATAS } from '../api/interface'
import coneDatas from './datas/content'
const mock = new AxiosMock(Axios)
    //axios-mock-adapte axios的模拟调试器
    //设置模拟调试器实例 
const login = {
    code: 0,
    message: 'ok',
    data: {
        userName: 'ljk',
        nickName: '枫有你的世界',
        phone: '18910493527',
        money: 10101010
    },
    timestamp: new Date().toLocaleDateString()

}
const coneData = {
    code: 0,
    msg: 'ok',
    data: coneDatas
}
const jdDatas = () => {
    mock.onGet('/api/jsList').reply((config) => {
            return new Promise((resolve, reject) => {
                resolve([200, jsLists])
            })
        }) //开始拦截
    mock.onGet('/api/jsComList').reply((config) => {
            return new Promise((resolve, reject) => {
                resolve([200, jsComList])
            })
        }) //开始拦截
    mock.onGet(SHOPDATAS).reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, shopDatas])
        })
    })
    mock.onPost('/api/shopc_num').reply((config) => {
        const data = JSON.parse(config.data);
        const id = data.id;
        const type = data.type;
        const newArr = [...shopDatas];
        const newArrs = newArr[0].active_item;
        let key = 0;
        if (type === 1) {
            for (let [idx, item] of newArrs.entries()) {
                if (id === item.id) {
                    newArrs[idx].quantity = newArrs[idx].quantity + 1;
                    newArrs[idx].prices = newArrs[idx].quantity * newArrs[idx].price
                    console.log(newArrs[idx].prices);
                }
            }
        } else {
            for (let [idx, item] of newArrs.entries()) {
                if (id === item.id) {
                    if (newArrs[idx].quantity > 0) {
                        newArrs[idx].quantity = newArrs[idx].quantity - 1
                        newArrs[idx].prices = newArrs[idx].quantity * newArrs[idx].price
                        console.log(newArrs[idx].prices);
                    } else {
                        newArrs[idx].quantity = 0;
                        newArrs[idx].prices = newArrs[idx].quantity * newArrs[idx].price
                        console.log(newArrs[idx].prices);
                    }
                }
            }
        }
        return new Promise((resolve, reject) => {
            resolve([200, newArr])
        })
    })
    mock.onPost('/api/login').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, login])
        })
    })
    mock.onPost('/api/cone').reply((config) => {
        const data = JSON.parse(config.data);
        const { pageIndex, pageSize } = data.limit;
        console.log(pageIndex, pageSize)
        const newConData = coneData.data.slice(pageIndex * pageSize, (pageIndex * 1 + 1) * pageSize);
        coneData.data = newConData;
        console.log(newConData)
        return new Promise((resolve, reject) => {
            resolve([200, coneData]);
        })
    })
    const yDatas = {
        code: 0,
        msg: 'ok',
        data: null
    }
    mock.onPost('/api/year').reply((config) => {
        console.log(config);
        const datas = JSON.parse(config.data).limit;
        const { yId, ySize } = datas;
        yDatas.data = coneData.data.slice(yId * ySize, (yId * 1 + 1) * ySize);
        return new Promise((resolve, reject) => {
            resolve([200, yDatas])
        })
    })
}
export default jdDatas
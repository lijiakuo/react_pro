import Mock from 'mockjs'
const arr = ['热销', '优惠', '新品品尝', '超值套餐', '经典烧味', '烧饼多味', '烧味多拼', '拌饭汁', '经典单品', '秋衣', '秋裤', '篮球', '乒乓球'];
const objCon = [];
const Random = Mock.Random
    // let arrs = [];
    // for (let i = 0; i < arr.length; i++) {
    //     objCon[arr[i]] = []
    //     for (let j = 0; j < 10; j++) {
    //         objCon[arr[i]].push(Mock.mock({
    //             dname: Random.cname(),
    //             title: Random.csentence(5, 30),
    //             pic: Random.dataImage('300x250', 'mock的图片')
    //         }))
    //     }

// }
for (let i = 0; i < arr.length; i++) {
    objCon.push(Mock.mock({
        item: arr[i],
        "foodList|3-8": [{
            "pic": Random.dataImage('60x60', 'image'),
            "text": Random.ctitle(5, 10),
            "num": Random.natural(1, 99),
            "price": Random.natural(1, 99),
            "cont": 1,
            "id": Random.id()
        }]

    }))
}
export {
    objCon
}
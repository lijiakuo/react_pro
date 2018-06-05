import Mock from 'mockjs'
const arr = [];
const Random = Mock.Random
for (let i = 0; i < 100; i++) {
    arr.push(Mock.mock({
        id: i,
        name: Random.cname(),
        phone: /^1[0-9]{10}$/,
        addr: Mock.mock('@county(true)'),
        dname: Random.cname(),
        wx: `sdf12${i}`,
        department: '市场部',
        dutyL: 'CTO',
        status: i % 2 == 0 ? '已拒绝' : '已审核',
        operation: i % 2 == 0 ? ['0', '1', '2'] : ['3'] //0修改 1禁用 2删除 3启用

    }))
}
export default arr;
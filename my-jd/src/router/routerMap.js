import Loading from '../component/Common/Loading'
import Loadable from 'react-loadable'
const Home = Loadable({
    loader: () =>
        import ('../component/Home'),
    loading: Loading
})
const Classify = Loadable({
    loader: () =>
        import ('../component/Classify'),
    loading: Loading
})
const Year = Loadable({
    loader: () =>
        import ('../component/Year'),
    loading: Loading
})
const My = Loadable({
    loader: () =>
        import ('../component/My'),
    loading: Loading
})
const ShopCar = Loadable({
    loader: () =>
        import ('../component/ShopCar'),
    loading: Loading
})
const Detail = Loadable({
    loader: () =>
        import ('../component/Detail'),
    loading: Loading
})
const Login = Loadable({
    loader: () =>
        import ('../component/Login'),
    loading: Loading
})
const Cone = Loadable({
    loader: () =>
        import ('../component/Cone'),
    loading: Loading
})
export const ROUTER_MAP = {
    NAV: [{
        text: '首页',
        to: '/',
        active: 'on',
        icon: 'home',
        show: 'no'
    }, {
        text: '分类',
        to: '/classify',
        active: 'on',
        icon: 'class',
        show: 'no'
    }, {
        text: '年货节',
        to: '/year',
        active: 'on',
        icon: 'girl',
        show: 'no'
    }, {
        text: '购物车',
        to: '/shopcar',
        active: 'on',
        icon: 'gouwuche',
        show: 'block'
    }, {
        text: '我的',
        to: '/my',
        active: 'on',
        icon: 'wode',
        show: 'no'
    }],
    ROUTER_VIEW: [{
            path: '/',
            component: Home
        },
        {
            path: '/classify',
            component: Classify
        },
        {
            path: '/year',
            component: Year
        },
        {
            path: '/shopcar',
            component: ShopCar
        },
        {
            path: '/my',
            component: My
        },
        {
            path: '/detail',
            component: Detail
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/cone',
            component: Cone
        }

    ],
    ROUTER_LIST: [{
            to: '/a',
            text: '热门推荐'
        },
        {
            to: '/b',
            text: '京东超市'
        },
        {
            to: '/c',
            text: '国际品牌'
        },
        {
            to: '/d',
            text: '奢侈品'
        },
        {
            to: '/e',
            text: '全球购'
        },
        {
            to: '/f',
            text: '男装'
        },
        {
            to: '/g',
            text: '女装'
        }
    ]
}
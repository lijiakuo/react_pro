import Home from '../views/Home'
import Classify from '../views/Classify'
import ShopCar from '../views/ShopCar'
import My from '../views/My'
import Index from '../views/Index'
export const ROUTER_MAP = {
    ROUTER_VIEW: [{
        path: '/index',
        component: Index,
        children: [{
            path: '/index/home',
            component: Home,

        }, {
            path: '/index/classify',
            component: Classify

        }, {
            path: '/index/shopCar',
            component: ShopCar,

        }, {
            path: '/index/my',
            component: My,

        }, ]
    }],
    ROUTER_LINK: [{
                text: '首页',
                to: '/index/home',
                active: 'on',
                show: 'no',
                icon: 'home'
            },
            {
                text: '分类',
                to: '/index/classify',
                active: 'on',
                show: 'no',
                icon: 'fl'
            },
            {
                text: '购物车',
                to: '/index/shopCar',
                active: 'on',
                show: 'no',
                icon: 'gw'
            },
            {
                text: '我的',
                to: '/index/my',
                active: 'on',
                show: 'no',
                icon: 'my'
            },
        ]
}
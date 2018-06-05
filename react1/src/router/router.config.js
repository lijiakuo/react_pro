import React, { Component } from 'react'
import Home from '../views/Home'
import Detail from '../views/Detail'
import Classify from '../views/Classify'
import Mine from '../views/Mine'
import Search from '../views/Search'
import Login from '../views/Login'
import Register from '../views/Register'
import Index from '../views/index'
import Car from '../views/Car'
import Setting from '../views/Setting'
import Result from '../views/Result'
import delivery from '../views/delivery'
import deliveryList from '../views/deliveryList'
import Test from '../views/Test'
export const ROUTER_MAP = {
    ROUTER_NAV: [{
            path: '/index',
            component: Index,
            children: [{
                    path: '/index/home',
                    component: Home,
                },
                {
                    path: '/index/classify',
                    component: Classify

                }, {
                    path: '/index/sq',
                    component: Classify,

                },
                {
                    path: '/index/car',
                    component: Car,

                },
                {
                    path: '/index/mine',
                    component: Mine,

                }, {
                    path: '/index/search',
                    component: Search
                }, {
                    path: '/index/result',
                    component: Result
                }
            ]
        }, {
            path: '/detail',
            component: Detail
        }, {
            path: '/register',
            component: Register
        }, {
            path: '/login',
            component: Login
        },
        {
            path: '/setting',
            component: Setting
        },
        {
            path: '/delivery',
            component: delivery
        },
        {
            path: '/deliveryList',
            component: deliveryList
        },
        {
            path: '/test',
            component: Test
        }
    ],
    ROUTER_LINK: [{
            path: '/index/home',
            component: Home,
            text: '首页',
            icon: 'home',
            active: 'on'
        },
        {
            path: '/index/classify',
            component: Classify,
            text: '分类',
            icon: 'fl',
            active: 'on'
        }, {
            path: '/index/sq',
            component: Classify,
            text: '社区',
            icon: 'sq',
            active: 'on'
        },
        {
            path: '/index/car',
            component: Car,
            text: '购物车',
            icon: 'car',
            active: 'on'
        },
        {
            path: '/index/mine',
            component: Mine,
            text: '我的',
            icon: 'mine',
            active: 'on'
        }
    ],
    ROUTER_VIEW: [{
            path: '/index/home',
            component: Home
        },
        {
            path: '/index/classify',
            component: Classify
        },
        {
            path: '/index/car',
            component: Home
        },
        {
            path: '/index/mine',
            component: Home
        },
        {
            path: '/index/search',
            component: Search
        }
    ]
}
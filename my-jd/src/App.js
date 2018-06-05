import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
    NavLink,
    Route,
    withRouter
} from 'react-router-dom'
import Header from './component/Common/Header'
import Footer from './component/Common/Footer'
import Main from './component/Common/Main'
import FooterItem from './component/Common/Footer/FooterItem'
import { ROUTER_MAP, aa } from './router/routerMap'
class App extends Component {

    render() {
        const { location } = this.props;

        return ( <div className = "App" > 
            { /* //<Router> 下只能有一个子组件  相当于vue router-view */ } 
                    <div className = 'wrap' > {
                /\/login/.test(location.pathname) ?
                '' :
                    < Header > </Header>
            }
            <Main > { /*route相当于router-view 存放路由的地方*/ } { /*exact精准匹配加载route上  */ } {
                /* <Route exact path='/home' component={Home}></Route>
                               <Route path='/classify' component={Classify}></Route>
                               <Route path='/year' component={Year}></Route>
                               <Route path='/shopcar' component={ShopCar}></Route>
                               <Route path='/my' component={My}></Route>  */
            } {
                ROUTER_MAP.ROUTER_VIEW.map((item, index) => {
                    return ( <Route exact key = { index }
                        path = { item.path }
                        component = { item.component } >
                        </Route>
                    )
                })
            }

            </Main> {
                /* /\/classify/.test(location.pathname) */
                location.pathname === '/classify' ?
                    '' :
                    <Footer > { /* NavLink 路由的链接 */ } { /*activeClassName点击哪个哪个加class  */ } {
                        /* <NavLink activeClassName='on' to='/'>
                                            <FooterItem title='首页' icon='home'></FooterItem>
                                          </NavLink>
                                          <NavLink activeClassName='on'  to='classify'>分类</NavLink>
                                          <NavLink activeClassName='on' to='year'>年货节</NavLink>
                                          <NavLink activeClassName='on' to='shopcar'>购物车</NavLink>
                                          <NavLink activeClassName='on' to='/my'>我的</NavLink> */
                    } {
                        ROUTER_MAP.NAV.map((item, index) => {
                            return ( <NavLink className = 'lis'
                                key = { index }
                                to = { item.to }
                                activeClassName = { item.active } >
                                <FooterItem title = { item.text }
                                icon = { item.icon } > </FooterItem> </NavLink>
                            )
                        })
                    } </Footer>
            } </div>

            </div>
        );
    }
}

export default withRouter(App);
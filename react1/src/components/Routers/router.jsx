import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {getCookie} from '../../utils/getCookie.js'
import {Redirect} from 'react-router-dom'
function isLogin (){
      return !!getCookie('token')
}
class RouterCom extends Component{
  render(){
    const {routers}=this.props;
    return <Switch>{routers.map((item,index)=>{
          return <Route key={index} path={item.path}  render={(location)=>{
            return item.autoFlag && ! isLogin()?
            <Redirect to={{pathname:'/login',state:{from:item.path}}}></Redirect>
            :
            <item.component {...location} routers={item.children}></item.component>
          }} ></Route>
        })}
    
    </Switch> 
  }
}
export default RouterCom 
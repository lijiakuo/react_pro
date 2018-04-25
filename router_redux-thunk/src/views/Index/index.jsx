import React,{Component} from 'react'
import {Route,NavLink,Switch,Redirect} from 'react-router-dom'
import './index.css'
import {ROUTER_MAP} from '../../router/routerMap.js'
import RouterCom from '../../component/Routers'
class Index extends Component{
  render(){
    const {routers}=this.props;
    return (
      
      <div id="index">
        <div className="content">
          <Switch>
              <RouterCom exact routers={routers}></RouterCom>
          </Switch>
        </div>
         <div className="footer">
             {
              ROUTER_MAP.ROUTER_LINK.map((item,index)=>{
                return (
                  <NavLink
                    key={index}
                    to={item.to}
                  >
                    <p className={item.icon}></p>
                    {item.text}
                  </NavLink>
                )
              })
            } 
        </div> 
      </div>
    )
  }
}
export default Index
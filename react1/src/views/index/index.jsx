import React,{Component} from 'react'
import {$http} from '../../utils/http.js'
import {Route,NavLink,Switch,Redirect} from 'react-router-dom'
import {ROUTER_MAP} from '../../router/router.config.js'
import './index.css'
import RouterCom from '../../components/Routers'
import {ToastContainer,toast} from 'react-toastify'
import Toast from 'react-toast-mobile'
import 'react-toast-mobile/lib/react-toast-mobile.css'
class Index extends Component{
  componentDidMount(){
    console.log(ROUTER_MAP)
    // $http.get("/server/test.json",{id:2,name:"李佳阔"})
    // .then(data=>
    //   console.log(data) 
    // )
    // .catch(err=>{
    //   console.log(err)
    // })
  }
  render(){
    const {routers}=this.props;
 
    return (
      <div id="index">
        {/* <ToastContainer className='toast'></ToastContainer> */}
         <Toast></Toast> 
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
                    to={item.path}
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
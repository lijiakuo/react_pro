import React,{Component} from 'react'
import './Register.css'
import {$http} from '../../utils/http.js'
class Reginster extends Component{
  registerFn(){
    let {user,pwd}=this.refs
    $http.post('/api/register',{
      user:user.value,
      pwd:pwd.value
    })
    .then(res=>{
      if(res.success==1){
        this.props.history.push('/login')
      }
    })
  }
  render(){
    return (
      <div className='register'>
        <h1>请注册信息：</h1>
        <p>用户：
          <input type="text" className="user" ref="user"/>
        </p>
        <p>
          密码：
          <input type="password" className="pwd" ref="pwd"/>
        </p>
        <p>
          <button onClick={this.registerFn.bind(this)}>注册</button>
        </p>
      </div>
    )
  }
}
export default Reginster
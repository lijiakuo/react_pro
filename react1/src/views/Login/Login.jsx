import React, { Component } from 'react'
import './Login.scss'
import { $http } from '../../utils/http.js'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
// import { connect } from 'react-redux'
import {mapDispatchToProps} from './dispatch.js'
  class Login extends Component {
    loginFn() {
      const { user, pwd } = this.refs;
      $http.post('/api/login', {
        user: user.value,
        pwd: pwd.value
      }).then(res => {
        console.log(res)

        if (res.success == 1) {
          //把用户信息存储一份到store中
          const { saveUser } = this.props;
          //把用户信息存储在localStore中
          localStorage.setItem('user-info',JSON.stringify(res.user))
          saveUser(res.user)
          //登录成功之后跳转页面
          let from = this.props.location.state ? this.props.location.state.from : 'index/home'
          document.cookie = "token=" + res.token
          this.props.history.push(from)
        } else {
          alert('登陆出错')
        }

      })
    }
    render() {
      return (
        <div className='login'>
          <h1>请登录用户信息：</h1>
          <NavLink to='/register'>注册</NavLink>
          <p>用户：
          <input type="text" className="user" ref="user" />
          </p>
          <p>
            密码：
          <input type="password" className="pwd" ref="pwd" />
          </p>
          <p>
            <button onClick={this.loginFn.bind(this)}>登录</button>
          </p>
        </div>
      )
    }
  }
export default connect(null, mapDispatchToProps)(Login)
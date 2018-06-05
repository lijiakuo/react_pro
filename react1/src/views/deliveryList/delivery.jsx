import React, { Component } from 'react'
import './delivery.scss'
import Header from '../../components/Header'
import Button from '../../components/Button'
import propTypes from 'prop-types'
import { $http } from '../../utils/http.js'
import {getCookie} from '../../utils/getCookie.js'
class Input extends Component {
  render() {
    return <input
      type='text'
      placeholder={this.props.placeholder}
      onChange={this.getVal.bind(this)}
    ></input>
  }
  getVal(e) {
    // console.log(e.target.value);
    // console.log(this.props)
    this.props.onChange(e.target.value)
  }
}
Input.propTypes = {
  onChange: propTypes.func.isRequired
}
class Select extends Component {
  render() {
    return <select onChange={this.getVal.bind(this)}>
      <option value="北京">北京</option>
      <option value="上海">上海</option>
      <option value="广州">广州</option>
      <option value="深圳">深圳</option>
    </select>
  }
  getVal(e) {
    // console.log(e.target.value)
    this.props.onChange(e.target.value)
  }
}
class deliveryList extends Component {
  constructor() {
    super();
    this.inputFn = this.inputFn.bind(this)
    this.name = '';
    this.phone = '';
    this.address = '';
    this.province = '';
    this.city = '';
    this.region = '';
  }
  render() {
    let { history } = this.props;
    return (
      <div>
        <Header history={history} ><h1>收货人</h1></Header>
        <div className='deSec'>
          <p><Input placeholder='收货人姓名' onChange={(val) => { this.inputFn('name', val) }}></Input></p>
          <p> <Input placeholder='手机号' onChange={(val) => { this.inputFn('phone', val) }}></Input></p>
          {/* <Input></Input> */}
          <p className='selAll'>
            <Select onChange={(val) => { this.inputFn('province', val) }}></Select>
            <Select onChange={(val) => { this.inputFn('city', val) }}></Select>
          </p>
          <p className='addSec' ><Select onChange={(val) => { this.inputFn('region', val) }}></Select></p>
          <p ><Input placeholder='详细地址' onChange={(val) => { this.inputFn('address', val) }}></Input></p>
        </div>
        <div className='save'>
          <Button onClick={this.toSave.bind(this)}>保存</Button>
        </div>
      </div>

    )

  }
  inputFn(str, val) {
    // console.log(val);
    this[str] = val;
  }
  toSave() {
    console.log(this.name)
    console.log(this.phone)
    console.log(this.address)
    console.log(this.province)
    console.log(this.city)
    console.log(this.region)
    let reg_name = /^[a-zA-Z\d(\u4e00-\u9fa5)]{1,5}$/;
    let reg_phone = /^1[34578]\d{9}$/;
    console.log(reg_name.test(this.name))
    console.log(reg_phone.test(this.phone));
    if (!reg_name.test(this.name)) {
      console.log('请输入用户名')
    }
    if (!reg_phone.test(this.phone)) {
      console.log('请输入手机号')
    }
    if (!this.province || !this.city || !this.region) {
      console.log('请选择省市区')
    }
    //新加邮寄地址
    $http.post('/user/Mail/addNew', {
      name: this.name,
      phone: this.phone,
      address: this.address,
      province: this.province,
      city: this.city,
      region: this.region,
      token:getCookie('token')

    })
      .then(res => {
        console.log(res)
      })


  }
}
export default deliveryList 
import React,{Component} from 'react'
import './My.css'
import {connect} from 'react-redux'
import {mixins} from 'core-decorators'

class My extends Component{
  constructor(){
    super()
    this.state={
      value:'1',
      valueArr:[],
      valueSel:'',
      valueSels:[]
    }
  } 
  changeR(e){
    this.setState({
      value:e.target.value
    })
  }
  changeC(e){
    const {checked,value}=e.target
    let {valueArr}=this.state
    if(checked&&valueArr.indexOf(value)===-1){
      valueArr.push(value)
    }else{
      valueArr=valueArr.filter(x=>x!=value)
    }
    this.setState({
      valueArr
    })
  }
  changeS(e){
    console.log(e.target.value);
    this.setState({
      valueSel:e.target.value
    })
  }
  changeSs(e){
    const {options}=e.target;
    const arrs=Object.values(options);
    console.log(arrs);
    const arr=Object.keys(options)
    .filter(x=>options[x].selected === true)
    .map(x=>options[x].value)
    console.log(arr)  
    this.setState({
       valueSels:arr
    })
  }
  render(){
    return (
      <div className='my'>
        <div className='radio'>
          请选择(只能选择一个):<br/>
          1: <input type="radio" checked={this.state.value==='1'} value='1' onChange={this.changeR.bind(this)}/><br/>
          2: <input type="radio" checked={this.state.value==='2'} value='2' onChange={this.changeR.bind(this)}/><br/>
          3: <input type="radio" checked={this.state.value==='3'} value='3' onChange={this.changeR.bind(this)}/><br/>
        </div>
        <div className='checkBox'>
          请选择(可以多选)：<br/>
          1: <input type="checkbox" checked={this.state.valueArr.indexOf('1')!==-1} value='1' onChange={this.changeC.bind(this)}/><br/>
          2: <input type="checkbox" checked={this.state.valueArr.indexOf('2')!==-1} value='2' onChange={this.changeC.bind(this)}/><br/>
          3: <input type="checkbox" checked={this.state.valueArr.indexOf('3')!==-1} value='3' onChange={this.changeC.bind(this)}/><br/>
        </div>
        <div className='select'>
          <div className='dx'>
            下拉框:<br/>
            <select  value={this.state.valueSel} onChange={this.changeS.bind(this)}>
              <option>北京</option>
              <option>上海</option>
              <option>天津</option>
            </select>
          </div>
          <div className='dx'>
            下拉框:<br/>
            <select multiple={true} value={this.state.valueSels} onChange={this.changeSs.bind(this)}>
              <option>北京</option>
              <option>上海</option>
              <option>广州</option>
              <option>深圳</option>
              <option>天津</option>
            </select>
          </div>
          
        </div>
      </div>
    )
  }
}
export default My
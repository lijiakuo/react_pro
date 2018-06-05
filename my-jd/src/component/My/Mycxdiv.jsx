import React,{Component} from 'react'
import './My.css'
import {connect} from 'react-redux'
import {mixins} from 'core-decorators'
//高阶组件
const HOCMine=(Com)=>{
  return class extends Component{
   constructor(){
     super()
     this.state={
       value:'李佳阔'
     }
   }
   change(e){
      this.setState({
        value:e.target.value
      })
   }
   render(){
      //value={this.state.value} handleChange={this.change.bind(this)}
        // const name={
        //   value:this.state.value,
        //   onChange:this.change.bind(this)
        // }
        const datas={
          name:{
            value:this.state.value,
            onChange:this.change.bind(this)
          },
          age:19,
          like:'cat'
        }
        return (
          <Com {...this.props} {...datas}/>
        )
      }
  } 
}
class My extends Component{
  render(){
    return (
      <div>
        {/*{...this.props.name}相当于 value={this.props.value} onChange={this.props.handleChange.bind(this)}  */}
        {/*input 有value的时候需要配合onChange事件  */}
        <div style={{display:'flex'}}>
          <div style={{background:'pink'}}>111</div>
          <div style={{background:'#f50'}}>
            <input type="text" {...this.props.name}/>
          </div>
        </div>
        
      </div>
    )
  }
}
export default HOCMine(My)
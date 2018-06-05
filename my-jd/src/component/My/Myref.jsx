import React,{Component} from 'react'
import './My.css'
import {connect} from 'react-redux'
import {mixins} from 'core-decorators'
// const mixinObj={
//   componentDidMount(){
//     console.log('did')
//   },
//   fn(){
//     console.log('hello')
//   }
// }

//参数OldCom 首字母必须大写
// const newMy=(OldCom)=>{
//   return class extends Component{
//     constructor(){
//       super();
//       this.state={
//         value:'ljk'
//       }
//     }
//     fns(arg){
//       // console.log(arg,'qwew')
//     }
//     change(e){
//       this.setState({
//         value:e.target.value
//       })
//       console.log(this.state.value);
//     }
//     render(){ 
//       const name='ljk'
      
//       const props=Object.assign({},this.props,{ref:this.fns.bind(this)})
//       return (
//         <OldCom {...props} name={name} value={this.state.value} handleChange={this.change.bind(this)}/>
//       )
//     }
//   } 
// }
// @mixins(mixinObj)
// class My extends Component{
//   componentWillMount(){
//     this.fn();
//   }
//   render(){
//     // console.log(this.props);
//     return (
//       <div>
//         <input type="text" value={this.props.value} onChange={this.props.handleChange}/>
//       </div>
//     )
//   }
// }
//高阶组件
const HOCMine=(Com)=>{
  return class extends Component{
    proc(arg){
      console.log(arg)//在高阶组件中可以拿到基础组件的this
    }
    render(){
      console.log(this)
      //通过ref使用引用
      //在高阶组件中，我们可以接受refs使用Com的引用 
      const props=Object.assign({},this.props,{ref:this.proc.bind(this)})
      return (
        <Com {...props}/>
      )
    }
  }
}
//基础组件
class My extends Component{
  render(){
    console.log(this)
    return (
      <div>
        my
      </div>
    )
  }
}
export default HOCMine(My)
import React,{Component} from 'react'
// import './deliveryList.scss'
import './Button.scss'
class Button extends Component{
  render(){
    return (
      <button className='clickBtn' onClick={this.props.onClick}>{this.props.children}</button>
    )

  }
  // toDeliveryList(){
  //   console.log(1)
  //   let {history}=this.props;
  //   console.log(this.props)
  //   history.push('/deliveryList')
  // }
}
export default Button
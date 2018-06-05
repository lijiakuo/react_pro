import React,{Component} from 'react'
// import './delivery.scss'
import Button from '../../components/Button'
import Header from '../../components/Header'
class delivery extends Component{
  render(){
    let {history}=this.props
    return (
      <div className='delivery'>
        <Header history={history}><h1>点击添加地址</h1></Header>
        <div className='secCom'>
          目前没有邮递地址信息
        </div>
        <div className='headerBtn'>
          <Button onClick={this.toDeliveryList.bind(this)}>点击添加地址</Button>
        </div>
      </div>
    )

  }

  toDeliveryList(){
    this.props.history.push('/deliveryList');
  }
}
export default delivery 
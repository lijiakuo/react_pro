import React,{Component} from 'react'
class Detail extends Component{
  render(){
    // console.log(this.props)
    const {location}=this.props;
    console.log(location.state.goods_id)
    return (
      <div>{location.state.goods_id}</div>
    )
  }
}
export default Detail
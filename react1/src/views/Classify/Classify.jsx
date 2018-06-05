import React,{Component} from 'react'
import './Classify.scss'
import {$http} from '../../utils/http.js'
class Classify extends Component{
  constructor(){
    super()
    this.state={
      activeIndex:0
    }
  }
  toggleActive(index){
  
    // $http.get('/api/classify',{sonid:3})
    // .then(res=>{
    //   console.log(res)
    // })
    let url='https://acs.m.taobao.com/h5/mtop.relationrecommend.wirelessrecommend.recommend/2.0/?appKey=12574478&t=1521557102170&sign=03c0cf2c9423c55cbaad2fe8f2d0b258&api=mtop.relationrecommend.WirelessRecommend.recommend&v=2.0&type=jsonp&dataType=jsonp&callback=mtopjsonp2&data=%7B%22appId%22%3A%223113%22%2C%22vm%22%3A%22nw%22%2C%22params%22%3A%22%7B%5C%22industry%5C%22%3A%5C%221%5C%22%2C%5C%22catmap_version%5C%22%3A%5C%222.0%5C%22%7D%22%2C%22nxtype%22%3A%22h5%22%7D'
    let men='http://apis.map.qq.com/ws/geocoder/vl/?location=39.984154,116.307490&key=7SFBZ-SLNRP-VMH2X-NQG5T-D3FRF&output=jsonp&callback=findLocation'
    $http.jsonp(url,'mtopjsonp2').then(res=>{
      console.log(res)
    })
    $http.jsonp(men,'findLocation')
    //7SFBZ-SLNRP-VMHZX-NQG5T-D3FRF
    .then(res=>{
      console.log(res);
    })
    this.setState({activeIndex:index})
  }
  render(){
    let clArr=['家乡味道','进口食品','牛奶乳品','休闲零食','生鲜果蔬','米面粮油','调味调料','酒水饮料']
    return (
      <div className="classify">
        <div className="cl-hea">
          <input type="text"/>
        </div>
        <div className="cl-con">
           <div className="cl-con-left">
            <ul className="cl-list">
              {
                clArr.map((item,index)=>{
                  return (
                    <li 
                      key={index}
                      className={this.state.activeIndex==index?'cl-active':''}
                      onClick={this.toggleActive.bind(this,index)}
                    >{item}
                    </li>
                  )
                })
              }
            </ul>
          </div> 
           <div className="cl-con-right"></div> 
        </div>
      </div>
    )
  }
}
export default Classify
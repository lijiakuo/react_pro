import React,{Component} from 'react'
import Swiper from 'swiper'
import './SwiperCom.css'
import 'swiper/dist/css/swiper.css'
class SwiperCom extends Component{
  render(){
    return (
      <div className='swiper-container' ref='scDom'>
        <div className='swiper-wrapper'>
          <div className='swiper-slide'>
            <img src={require('../../static/img/1.jpg')}alt=""/>
          </div>
          <div className='swiper-slide'>
            <img src={require('../../static/img/2.jpg')}alt=""/>
          </div>
          <div className='swiper-slide'>
            <img src={require('../../static/img/3.jpg')}alt=""/>
          </div>
          <div className='swiper-slide'>
            <img src={require('../../static/img/p3.jpg')}alt=""/>
          </div>
         
        </div>
         <div className="swiper-pagination"></div>
      </div>
    )
  }
  componentDidMount(){    
    new Swiper(this.refs.scDom,{
      autoplay:{
        delay:2000,
        
      },
      loop:true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      },
    })
  }
}
export default SwiperCom
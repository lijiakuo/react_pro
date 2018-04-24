import React, { Component } from 'react'
import './Classify.css'
import { connect } from 'react-redux'
import { getClassifyFn } from '../../store/action/classify.js'
import { getClassify } from '../../api/server.js'
import BScroll from 'better-scroll'
class Classify extends Component {
  constructor() {
    super()
    this.state = {
      arr: ['热销', '优惠', '新品品尝', '超值套餐', '经典烧味', '烧饼多味', '烧味多拼', '拌饭汁', '经典单品', '秋衣', '秋裤', '篮球', '乒乓球'],
      activeIndex: 0
    }
  }
  componentDidMount() {
    getClassify()
      .then(res => {
        const { dispatch, classDatas } = this.props;
        const datas = res.data;
        console.log(datas)
        dispatch(getClassifyFn(datas))
      })
    const { lists, scroller, scrollers } = this.refs;
    this.setState({
      scroll: new BScroll(scroller, {
        scrollY: true,
        click: true,
      }),
      scrolls: new BScroll(scrollers, {
        scrollY: true,
        click: true,
        probeType: 3,
        scrollbar: {
          fade: false
        }
      })
    })
    setTimeout(() => {
      const {scroll,scrolls}=this.state;
      let listsArr = document.getElementsByClassName('lists');
      let listsHeight = [0];
      let heights = 0;
      for (let i = 0; i < listsArr.length; i++) {
        heights += listsArr[i].offsetHeight
        listsHeight.push(heights)
      }
      scrolls.refresh()
      scrolls.on('scroll', (pos) => {
        const y = pos.y;
        console.log(y);
        for (let j = 0; j < listsHeight.length - 1; j++) {
          let height1 = listsHeight[j];
          let height2 = listsHeight[j + 1];
          if (-y >= height1 && -y < height2) {
            this.setState({
              activeIndex: j
            })
          }
        }
      })
    }, 0)
  }
  toggleClass(index) {
    console.log(index)
    const {scroll,scrolls}=this.state;
    let listsArr = document.getElementsByClassName('lists');
    let lis = document.querySelector('.left-content');
    this.setState({
      activeIndex: index
    })
    scrolls.scrollToElement(listsArr[index], 1000,0,0)
  }
  render() {
    const { classDatas } = this.props;
    const { arr } = this.state;
    return (
      <div className='classify'>
        <div className='left-wrapper' ref='scroller'>
          <ul className='left-content' >
            {
              arr.map((item, index) => {
                return <li
                  key={index}
                  className={this.state.activeIndex == index ? 'on' : ''}
                  onClick={this.toggleClass.bind(this, index)}
                >{item}</li>
              })
            }
          </ul>
        </div>
        <div className='right-wrapper' ref='scrollers'>
          <div className='right-content'>
            {
              classDatas && classDatas.map((item, index) => {
                return (
                  <div key={index} className='lists'>
                    <h1>{item.item}</h1>
                    {
                      item.foodList.map((items, idx) => {
                        return (
                          <dl key={idx}>
                            <dt>
                              <img src={items.pic} alt="" />
                            </dt>
                            <dd>
                              <p>{items.text}</p>
                            </dd>
                          </dl>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>

        </div>
      </div>
    )
  }
}
const mapStateToprops = ((state, props) => {
  console.log(state.classify)
  return {
    classDatas: state.classify.classifyDatas
  }
})
export default connect(mapStateToprops)(Classify)
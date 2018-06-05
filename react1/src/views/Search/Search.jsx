import React,{Component} from 'react'
import './Search.scss'
import {connect} from 'react-redux'
class Search extends Component{
  constructor(){
    super()
    this.state={
      seaLists:[]
    }
  }
  componentDidMount(){
    if(localStorage.getItem('itemSea')){
      this.setState({
        seaLists:JSON.parse(localStorage.getItem('itemSea'))
      })
    }
  }
  toSearch(){
    if(!this.refs.keyWords.value) return 
    const {history}=this.props
    let keyWords=this.refs.keyWords.value;
    let ls=localStorage;
    if(ls.getItem('itemSea')){
      let shArr=JSON.parse(ls.getItem('itemSea'))
      console.log(shArr)
      if(shArr.indexOf(keyWords)>-1)return 
      shArr.push(keyWords);
      ls.setItem('itemSea',JSON.stringify(shArr))
    }else{
      ls.setItem('itemSea',JSON.stringify([keyWords]))
    }
    history.push('/index/result',{
        key_words:keyWords
    })
  }
  toResult(item){
    console.log(item)
    const {history}=this.props
    history.push('/index/result',{
        key_words:item
    })
  }
  toClear(){
    localStorage.removeItem('itemSea')
    this.setState({
      seaLists:[]
    })
  }
  render(){
    const {seaLists}=this.state;
    const {goodsList}=this.props;
    // console.log(goodsList)
   return (
      <div className="search">
        <div className="search-header">
          <p>
            <span className='ss'></span>
            <input type="text" ref='keyWords' placeholder="请输入您要购买的商品"/>
          </p>           
          <span onClick={this.toSearch.bind(this)}>搜索</span>
        </div>
        <section className="search-fri">
          <p>最近搜索 <span className='sc' onClick={this.toClear.bind(this)}></span></p>
          <ul className='list1'>
            {
              seaLists.length==0?<p>暂无搜索信息</p>
              :
              seaLists.map((item,index)=>{
                return (
                  <li 
                    key={index}
                    onClick={this.toResult.bind(this,item)}  
                  >{item}</li>
                )
              })
              
            }
          </ul>
          {/* <p>{goodsList.data.data[0].goods_name}</p> */}
        </section>
        <section className="search-sec">
          <p>大家都在搜</p>
          <ul className='list1'>
            <li onClick={this.testSaga.bind(this)}>点我测试saga中间件</li>
            <li>粽子</li>
            <li>锅巴</li>
            <li>零食</li>
            <li>水果</li>
            <li>大米</li>
            <li>面粉</li>
          </ul>
          <p>  
           {goodsList.data&&goodsList.data.data[0].goods_name}
          </p>
        </section>
      </div>
    )
  }
  testSaga(){
    this.props.dispatch({
      type:'GET_GOODS_LIST'
    })
  }
}
export default connect(function(state){
  console.log(state.goods_list)
  return {
    goodsList:state.goods_list
  }
},null)(Search) 
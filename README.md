# react_pro

##（1）路由规划

组件App,公共组件,组件Index
   <div className="App">
        <div className='wrap'>
          <Switch>
            <Redirect  exact from="/" to="/index/home"></Redirect> 
            <RouterCom routers={ROUTER_MAP.ROUTER_VIEW}></RouterCom>
          </Switch>
          </div>
      </div>

##（2）better-scroll

##（3）管理系统

##（4）脚手架
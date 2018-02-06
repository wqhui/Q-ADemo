import React from 'react';
import Bundle from './Bundle';

// 默认加载组件，可以直接返回 null 
import Loading from './components/public/Loading.js';


/*
   包装方法，第一次调用后会返回一个组件（函数式组件）
   由于要将其作为路由下的组件，所以需要将 props 传入
      <Bundle load={loadComponent}>
      {Comp => (Comp ? <Comp {...props} /> : <Loading />)}
   </Bundle>
*/ 
const lazyLoad = (loadComponent,props) =>
{//Bundle  包含的是一个函数子组件 由Bundle.js里的this.props.children(this.state.mod)渲染
  return(
   <Bundle load={loadComponent}>
      {Comp => (Comp ? <Comp {...props} /> : <Loading />)}
   </Bundle>
);}

export default lazyLoad;
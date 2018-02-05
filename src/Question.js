import React from 'react';
import {connect} from 'react-redux';

import {List,Map,fromJS,is} from 'immutable';
import { BrowserRouter,Route,Redirect } from 'react-router-dom';

import Header from './components/public/Header.js';
import Home from './page/Home.js';
import Detail from './page/Detail.js';

class Question extends React.Component{ 

  shouldComponentUpdate(nextProps, nextState) {
    const {value}=this.props;
    const {value:nextValue}=nextProps;
    if(!is(value.answer!==nextValue.answer) || !is(value.question!==nextValue.question)){
      console.log("Question is rendered!");
      return true;
    }
    return false;
  }



  render(){
    const {dispatch,getState,value}=this.props;
    return(
           <div>
              <Header></Header>  
              
                  <BrowserRouter>
                    <div>

                        <Route exact  path="/" render={()=>   
                          <Redirect to="/home"/>               
                          // <Home dispatch={dispatch} getState={getState} questionList={value.question}></Home>
                        }/>
                        <Route path="/home" render={()=>                  
                          <Home dispatch={dispatch} getState={getState} questionList={value.question}></Home>
                        }/>                         
                        <Route path="/detail" render={(props)=>{
                          return  (<Detail pid={props.location.id} 
                                      questionList={value.question}  dispatch={dispatch} 
                                      answer={value.answer}
                                />  )
                        }}/>
                    </div>
                  </BrowserRouter>          
          </div>
    )
  }
}


const mapStateToProps=(state,oweProps)=>{
    return {
      value:state
    }
}

const mapDispatchToProps=(dispatch,oweProps)=>{

    return{
        dispatch:dispatch

    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Question);
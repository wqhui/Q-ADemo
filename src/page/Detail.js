import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import classnames from 'classnames';
import {List,Map,is} from 'immutable';

import Breadcrumb from '../components/public/Breadcrumb.js';
import FailPage from '../components/public/FailPage.js'
import QuestionDetail from '../components/question/view/QuestionDetail.js';
import AnswerList from '../components/answer/view/AnswerList.js';
import AnswerAdd from '../components/answer/view/AnswerAdd.js';


/*
{
    answerList: List, 
    questionDetail: Map, 
    addAnswer: ƒ, 
    onBackList: ƒ, 
    changeUpvoteById: ƒ
}
 */
class Detail extends React.Component{

    getQuestion(questionList,id){
        for(let ii=0;ii<questionList.size;ii++){
             if(questionList.getIn([ii,"id"])===id){
                 return questionList.get(ii);
                 break;
             }
        }
    }

    getAnswerList(pid,answerList,sort){
        let newAnswerList=List([]);
        for(let ii=0;ii<answerList.size;ii++){
            let ans=answerList.get(ii);
            //console.log(newMap);
            if(pid==ans.get("pid")){
              newAnswerList=newAnswerList.push(ans);
            }
        }  
        if(!sort){//如果为false 时间倒叙
            return newAnswerList.reverse()
        }
        return newAnswerList;
    }

    renderPanel(){
        const {questionList,pid,answer,dispatch}=this.props;

        if (typeof pid ==="undefined") {
            return <FailPage tip="数据不存在！点击下方按钮返回首页"></FailPage>
        }

        const questionDetail=this.getQuestion(questionList,pid);
        const sort=answer.get("sort");
        const answerList=this.getAnswerList(pid,answer.get("answerList"),sort)
        return(
            <div style={{padding:"0 10%"}}>
                <Breadcrumb></Breadcrumb>
                <QuestionDetail questionDetail={questionDetail} dispatch={dispatch}></QuestionDetail>              
                <AnswerList  pid={pid} sort={sort} 
                    answerList={answerList} 
                    dispatch={dispatch}
                />           
                <AnswerAdd pid={pid} dispatch={dispatch}></AnswerAdd>    
            </div>
        )
    }

    render(){
    return(         
            <div>
                {this.renderPanel()}
            </div>            
        )
}
}

export default Detail;

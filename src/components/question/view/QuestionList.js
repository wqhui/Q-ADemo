import React from 'react';
import {connect} from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group'

import classnames from "classnames";
import {List,Map,is} from 'immutable';

import QuestionItem from './QuestionItem.js';
import * as styles from "./questionList.less";

  /*
  {
    questionList: List([]), 
    seeDetail: ƒ,  
    changeUpvoteById: ƒ
  }
 */
class QuestionList extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if(!is(this.props.questionList,nextProps.questionList)){
      console.log(" question list render !");
      return true;
    } 
    
    return false; 
  }

	render() { 
    const {questionList,dispatch}=this.props;
    return(
    	<CSSTransitionGroup className={styles["question-list"]}
        transitionName="upMove" transitionEnterTimeout={300} transitionLeaveTimeout={300}
        transitionAppear={true} transitionAppearTimeout={300}>
				{
          questionList.map((item)=>{
             return <QuestionItem 
                      key={item.get("id")}
                      value={item}
                      dispatch={dispatch}
                    />  
          })
        }		

			</CSSTransitionGroup>
    )



	}
}
export default QuestionList;


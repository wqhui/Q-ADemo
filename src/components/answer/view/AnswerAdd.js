import React from 'react';

import classnames from 'classnames';
import {Map} from 'immutable';

import {addAnswer} from '../action.js';
import {addQuestionSonCount} from '../../question/action.js'
import * as styles from "./answerList.less";
import * as mainStyles from '../../public/style.less';



/*
    {   
        pid: 1, 
        addAnswer: ƒ
    }
 */
class AnswerAdd extends React.Component{

	constructor(props){
		super(props);
		this.submitAmswer=this.submitAmswer.bind(this);
		this.answerChange=this.answerChange.bind(this);
		this.state={	
			answer:''
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('AnswerAdd is render?' +(this.state.answer!==nextState.answer));
		return this.state.answer!==nextState.answer
	}

	//答案改变
    answerChange(ev){
    	this.setState({
    		answer:ev.target.value
    	})
    }

    //添加新答案
    submitAmswer(ev){
    	ev.preventDefault();//阻止默认提交
        const {pid}=this.props;
    	let answer=this.state.answer;   	 	
    	//this.props.addAnswer(pid,answer);
    	this.props.dispatch(addAnswer(pid,answer));
    	this.props.dispatch(addQuestionSonCount(pid));
    	this.setState({
    		answer:''
    	})

    }

	render(){
		return(
			<div className={styles["write-answer-area"]}>
				<div className={styles["caption"]}>撰写答案</div>	
				<form onSubmit={this.submitAmswer}>
					<div className={styles["write-amswer"]}>
						<textarea className={mainStyles["width100"]} name="answer"  rows="8" 
							onChange={this.answerChange} value={this.state.answer}
							placeholder="撰写答案"></textarea>
					</div>	
					<div className={styles["write-tool"]}>
						<button className={classnames(mainStyles["btn"],styles["submit-answer-btn"])} type="sbumit">提交答案</button>
					</div>	
				</form>		
			</div>
		)
	}
}

export default AnswerAdd;
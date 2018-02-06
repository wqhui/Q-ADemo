import React,{Fragment} from 'react';

import {Map,is} from 'immutable';

import GetDateDiff from '../../../util/GetDateDiff.js'; 
import Upvote from '../../public/Upvote.js';

import classnames from 'classnames';
import * as styles from "./questionDetail.less";
import * as mainStyles from '../../public/style.less';
import * as fontStyles from '../../../font-awesome/css/font-awesome.css'


import {eventBus} from '../../../util/eventBus.js';
/*
	{
		questionDetail: Map, 
		changeUpvoteById: ƒ
	}
 */
const defaultValue={
	questionDetail:Map({
		id:0,
		title:'title',
		subtime:'1999-9-9',
		substance:'content',
		upvote:999
	})	
}


const handle=eventBus.sub("ansToQue","updateTime",(data)=>{
	console.log("eventBus sub 执行啦！data："+JSON.stringify(data));
})


const QuestionDetail=(props)=>{
	const {questionDetail,dispatch} = props;
	return(
		<Fragment>
			<div className={styles["question-header"]}>
				<div className={styles["question-title"]}>
					<span className={classnames(fontStyles["fa"],fontStyles["fa-question-circle-o"],mainStyles["color82CCB0"],mainStyles["pdr5px"])}></span>
					{questionDetail.get("title")}
				</div>	
				<div className={styles["questioner-msg"]}>
					<div className={styles["tag-list"]}>
						<span className={styles["tag"]}>React</span>
						<span className={styles["tag"]}>JavaScript</span>
						<span className={styles["tag"]}>前端</span>
					</div>
					<div className={classnames(styles["questioner-name"],mainStyles["color82CCB0"])}>LikeLit丶</div>		
					<div className={styles["questioner-time"]}>
						{GetDateDiff(questionDetail.get("subtime"))}提问
					</div>				
				</div>
			</div>
			<div className={styles["question-desc"]}>
                <div className={styles["left-area"]}>
                	<Upvote 
                		count={questionDetail.get("upvote")} 
                		id={questionDetail.get("id")}
                		dispatch={dispatch}
                	></Upvote>
                </div>
                <div className={styles["right-area"]}>
                    <div className={styles["question-substance"]}>
                    	{questionDetail.get("substance")}
                    </div>
               </div>	
			</div>
		</Fragment>
	)	
}

export default QuestionDetail;
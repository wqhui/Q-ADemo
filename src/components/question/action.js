import {ADD_QUESTION,CHANGE_QUESTION_UPVOTE,ADD_QUESTION_SONCOUNT,GET_QUESTION_DETAIL} from "./actionType.js";
import {Map} from 'immutable';

let initId=0;

export const addQuestion=(title,substance)=>({
	//初始化数据
	type:ADD_QUESTION,
	id:++initId,
	title:title,
	substance:substance,
	subtime:Date.parse(new Date()),//发布时间戳 
	answerCount:0,//回答数
	upvote:0  
})

export const changeQuestionUpvote=(id,newUpvote)=>({
	type:CHANGE_QUESTION_UPVOTE,
	id:id,
	newUpvote:newUpvote
})

export const addQuestionSonCount=(id)=>({
	type:ADD_QUESTION_SONCOUNT,
	id:id
})

export const getQuestionDetail=(id)=>({
	type:GET_QUESTION_DETAIL,
	id:id
})
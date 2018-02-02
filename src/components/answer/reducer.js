import {ADD_ANSWER,TOGGLE_SORT} from "./actionType.js";
import {List,Map,fromJS} from 'immutable';

export default (state=Map({
		sort:true,
		answerList:List([])
	}),action)=>{
	let mapAction=fromJS(action);//转化为immutable
	switch(action.type){
		case ADD_ANSWER:{
			return state.update('answerList',list=>list.push(mapAction.delete("type")))
		}
		case TOGGLE_SORT:{
			return state.update('sort',val=>action.sort)
		}
		default: {
      		return state;
    	}
	}
}


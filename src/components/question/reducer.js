import {ADD_QUESTION,CHANGE_QUESTION_UPVOTE,ADD_QUESTION_SONCOUNT,GET_QUESTION_DETAIL} from "./actionType.js";
import {List,Map,fromJS} from 'immutable';
 /*
    state:[
    {
        id:myId,
        title:title,
        substance:substance,
        subtime:timestamp,
        answerCount:0,//回答数
        upvote:0
    }
    ],
*/
export default (state=List([]),action)=>{
	let mapAction=fromJS(action)
	switch(action.type){
		case ADD_QUESTION:{//添加问题			
			return state.push(mapAction.delete("type"))
		}
		case CHANGE_QUESTION_UPVOTE:{//修改点赞数
			return state.map(item=>{
				if(item.get("id")===mapAction.get("id")){
					return item.update("upvote",val=>mapAction.get("newUpvote"))
				}else{
					return item;
				}
			})
		}
		case ADD_QUESTION_SONCOUNT :{//id添加答案数
			for(let ii=0;ii<state.size;ii++){
				if(state.getIn([ii,"id"])===action.id){
					return state.updateIn([ii,"answerCount"],val=>++val)					
				}
			}
		}
		case GET_QUESTION_DETAIL :{
		    for(let ii=0;ii<questionList.size;ii++){
		         if(questionList.getIn([ii,"id"])===action.id){
		             return questionList.get(ii);		             
		         }
		    }
		}
		default: {
      		return state;
    	}
	}
}
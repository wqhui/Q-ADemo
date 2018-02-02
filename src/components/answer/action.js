import {ADD_ANSWER,TOGGLE_SORT} from './actionType.js';
import GetUUID from '../../util/GetUUID.js';
export let newAction=(pid,answer)=>{
    return (dispatch,getState)=>{
    		dispatch({
      		type:ADD_ANSWER,
      		id:GetUUID(),
      		answer:answer,
      		pid:pid,
      		timestamp:Date.parse(new Date())
      	})
    }
}

export const addAnswer=(pid,answer) => ({
		type:ADD_ANSWER,
		id:GetUUID(),
		answer:answer,
		pid:pid,
		timestamp:Date.parse(new Date())
})

export const sortAnswerList=(sort)=>({
	type:TOGGLE_SORT,
	sort:sort
})



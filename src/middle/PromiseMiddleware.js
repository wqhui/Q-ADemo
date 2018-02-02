export default function promiseMiddleware({dispatch}){
	//promise:fetch(),
	//types:[PENDING,DONE,FAIL]
	return (next)=>{
		(action)=>{
			const {types,promise,...rest}=action;
			if(!isPromise(promise) || !(action.types && action.types.length===3)){
				return next(action);
			}

			const [PENDING,DONE,FAIL]=types;
			dispatch({...rest,type:PENDING});
			return action.promist.then(
				(result)=>dispatch({...rest,result,type:DONE})
			).catch(
				(error)=>dispatch({...rest,error,type:FAIL})
			)
		}
	}
}

function isPromise(obj){
	return obj && typeof obj.then  ==="function";
}
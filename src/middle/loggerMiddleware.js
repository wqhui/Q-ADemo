export default function loggerMiddleware({dispatch,getState}){
	return (next)=>(action)=>{
			console.group('logger');
			console.log('%c action','color:green;font-weight:bold;');
			console.log(action);
			let nextValue=next(action)
			console.log('%c next state','color:blue;font-weight:bold;');
			console.log(getState());
			console.groupEnd('logger');
			return nextValue;
		}
	
}
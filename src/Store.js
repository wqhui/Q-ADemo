import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import loggerMiddleware from './middle/loggerMiddleware.js';
import questionReducer  from './components/question/reducer.js';
import answerReducer  from './components/answer/reducer.js';


const reducer=combineReducers({
	question:questionReducer,
	answer:answerReducer
})

let middleware = [thunk,loggerMiddleware];

export default createStore(reducer,applyMiddleware(...middleware));
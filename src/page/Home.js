import React from 'react'; 
import {connect} from 'react-redux';

import QuestionAdd from '../components/question/view/QuestionAdd.js';
import QuestionList from '../components/question/view/QuestionList.js';


const Home=(props)=>{
  const {dispatch,getState,questionList}=props;
	return( 
		   	<div>     
		      <QuestionAdd dispatch={dispatch}/>
          
		      <QuestionList 
            questionList={questionList} dispatch={dispatch}
          />       
		    </div> 
	 )
}  


export default Home;
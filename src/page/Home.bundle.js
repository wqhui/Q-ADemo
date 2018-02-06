import React,{Fragment} from 'react'; 
import {connect} from 'react-redux';

import QuestionAdd from '../components/question/view/QuestionAdd.js';
import QuestionList from '../components/question/view/QuestionList.js';


const Home=(props)=>{
  const {dispatch,getState,questionList}=props;
	return( 
		   	<Fragment>     
		      <QuestionAdd dispatch={dispatch}/>
          
			      <QuestionList 
	            questionList={questionList} dispatch={dispatch}
	          />       
		    </Fragment> 
	 )
}  


export default Home;
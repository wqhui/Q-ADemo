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

// const mapStateToProps = (state) => {  
//   return {
//     questionList:state.question
//   };
// }

// const mapDispatchToProps=(dispatch)=>{
//     return {
//         changeQuestionUpvote: (id,newUpvote) => {
//             dispatch(changeQuestionUpvote(id,newUpvote));       
//         },
//         addQuestion: (title,substance) => {
//           dispatch(addQuestion(title,substance));
//         }        
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Home);


export default Home;
import React from 'react';
import {connect} from 'react-redux';

import {Map,is} from 'immutable';
import classnames from 'classnames';

import {changeQuestionUpvote} from '../question/action.js';
import * as mainStyles from '../public/style.less';
import * as fontStyles from '../../font-awesome/css/font-awesome.css'

class Upvote extends React.Component {

	changeQuestionUpvote(value,id,count){
		if(count>0 || value>0){
			count+=value;
			this.props.dispatch(changeQuestionUpvote(id,count));
		}
	}
	render(){
		const {id,count}=this.props;
		return(
				<div>
					<div className={classnames(mainStyles["question-upvote"],mainStyles["upvote-item"])} 
                        onClick={this.changeQuestionUpvote.bind(this,1,id,count)}>
		                  <span className={classnames(fontStyles["fa"],fontStyles["fa-chevron-up"])}></span>
		                <div>
							{count}
		                </div>
		            </div>

		            <div className={classnames(mainStyles["question-downvote"],mainStyles["upvote-item"])}
                         onClick={this.changeQuestionUpvote.bind(this,-1,id,count)}>
		                  <span className={classnames(fontStyles["fa"],fontStyles["fa-chevron-down"])}></span>                          
		            </div>	
				</div>
		)
	}
}

export default Upvote;
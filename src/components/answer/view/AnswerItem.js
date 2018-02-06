import React from 'react';
import {connect} from 'react-redux';

import classnames from 'classnames';
import {is} from 'immutable';

import GetDateDiff from '../../../util/GetDateDiff.js';
import * as styles from "./answerList.less";
import * as mainStyles from '../../public/style.less';
import * as fontStyles from '../../../font-awesome/css/font-awesome.css';

class AnswerItem extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        if(!is(nextProps.answerValue,this.props.answerValue)){
            console.log('AnswerItem id '+this.props.answerValue.get("id")+' is rendered!');
            return true;       
        }     
        return false;                
    }
    renderPanel(){
        const {answerValue}=this.props;
        return(
            <div className={styles["answer-item"]}>
                <div className={styles["left-area"]}>
                    <div className={classnames(mainStyles["question-upvote"],mainStyles["upvote-item"])}>
                        <span className={classnames(fontStyles["fa"],fontStyles["fa-chevron-up"])}></span>
                        <div>
                           1
                        </div>
                    </div>

                    <div className={classnames(mainStyles["question-downvote"],mainStyles["upvote-item"])}>
                        <span className={classnames(fontStyles["fa"],fontStyles["fa-chevron-down"])}></span>                          
                    </div>
                </div>
                <div className={styles["right-area"]}>
                    <div className={styles["answer-content"]}>{answerValue.get("answer")}</div>
                    <div className={styles["respondent-msg"]}>
                        <div className={styles["answer-msg"]}>
                            <span className={styles["msg-item"]}>
                                <span>{GetDateDiff(answerValue.get("timestamp"))}</span>
                                <span>回答</span>
                            </span>                    
                            <span className={styles["msg-item"]}>
                                <span className={classnames(fontStyles["fa"],fontStyles["fa"],fontStyles["fa-cny"] ,fontStyles["pdr5px"])}></span>
                                <span>赞赏</span>
                            </span>
                        </div>
                        <div className={classnames(styles["user-msg"] ,mainStyles["color82CCB0"])}>
                            <a href="javascript:;" >
                                <span className={classnames(fontStyles["fa"],fontStyles["fa-user-circle-o"])}></span>
                                <span className={styles["user-name"]}>超人不会飞</span>
                            </a>        
                        </div>
                    </div>
                </div>  
            </div>          
        )    
    }

    render(){
        return this.renderPanel()
    }

}

export default AnswerItem;
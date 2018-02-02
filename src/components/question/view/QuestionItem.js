
import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import classnames from "classnames";
import {Map,is} from 'immutable';

import GetDateDiff from '../../../util/GetDateDiff.js';

import {changeQuestionUpvote} from '../action.js';
import * as styles from "./questionList.less";
import * as mainStyles from '../../public/style.less';
import * as fontStyles from '../../../font-awesome/css/font-awesome.css'
 
/*
    {
        value: Map({}),问题项
        changeUpvoteById: ƒ
    }
 */
class QuestionItem extends React.Component {
    shouldComponentUpdate(nextProps, nextState){
        //console.log(is(this.state.stateMap,nextState.stateMap));
        if(!is(this.props.value,nextProps.value)){
            console.log('question item id '+this.props.value.get("id")+' is rendered!');
            return true;       
        }       
        return false;          
    }
    //踩 or 赞
    changeQuestionUpvote(num){
        const {value,dispatch}=this.props;
        let count=value.get("upvote");
        if(count>0 || num>0){
            count+=num;
            dispatch(changeQuestionUpvote(value.get("id"),count));//根据id修改数据中的点赞数
        }
    }

    renderPanel(){
        const {value}=this.props;
        return(
            <div className={styles["question-show-content"]}>
                
                <div className={styles["left-area"]}>
                    <div className={styles["user-msg"]}>
                        <div className={classnames(fontStyles["fa"],fontStyles["fa-user-circle-o"],fontStyles["fa-3x"],styles["user-pic"])}></div>
                        <div className={styles["user-name"]}>LikeLit</div>
                    </div>
                        
                </div>
                <div className={classnames(styles["right-area"],mainStyles["width100"])} >
                    <div className={styles["question-title"]}>
                        <Link to={{
                              pathname: '/detail',
                              id: value.get("id")
                            }}>{value.get("title")}
                        </Link>
                    </div>
                    <div className={styles["question-substance"]}>{value.get("substance")}</div>
                    <div className={styles["question-msg"]}>
                        <div className={styles["question-tool"]}>                                                          
                            <div className={styles["question-item"]}>
                                {GetDateDiff(value.get("subtime"))}
                            </div>
                            <div className={mainStyles["dot"]}>·</div>
                            <div className={styles["question-item"]}>
                                <span className={classnames(fontStyles["fa"],fontStyles["fa-comments-o"],mainStyles["fa-mrgr"])}></span>
                                <span>{value.get("answerCount")}</span>
                            </div>
                            
                        </div>
                        <div className={styles["upvote-tool"]}>
                            <div className={styles["up-vote"]}>
                                <a href="javascript:;" onClick={this.changeQuestionUpvote.bind(this,1)}>
                                    <span className={classnames(fontStyles["fa"],fontStyles["fa-thumbs-o-up"])}></span>
                                </a>
                            </div>  
                            <div className={mainStyles["dot"]}>·</div>
                            <div className={styles["upvote-count"]}>{value.get("upvote")}</div>
                            <div className={mainStyles["dot"]}>·</div>
                            <div className={styles["down-vote"]}>
                                <a href="javascript:;" onClick={this.changeQuestionUpvote.bind(this,-1)}>
                                    <span className={classnames(fontStyles["fa"],fontStyles["fa-thumbs-o-down"])}></span>
                                </a>
                            </div>           
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }

    render() {
        //<div className={classnames(styles["questionItem"],mainStyles["upMoveSAnimation"])}>
        return (
            <div className={classnames(styles["questionItem"])}>
                {this.renderPanel()}
            </div>
        )
    }
}
export default QuestionItem;

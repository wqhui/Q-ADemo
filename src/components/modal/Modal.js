import React from 'react';

import classnames from "classnames";
import {toJS} from 'immutable';
import * as styles from './modal.less';
import * as fontStyles from '../../font-awesome/css/font-awesome.css'
/*
{
	title
	content
	icon
	btn:{
		ok
		cancel
	}

}

 */
class Modal extends React.Component{

	constructor(){
		super(...arguments);

		this.state={
			modalShow:false
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}

	closeModal(){
		this.setState({
			modalShow:false
		})
	}

	openModal(){
		this.setState({
			modalShow:true
		})
	}

	renderPanel(){
		// const {title,content,icon}=this.props.value.toJS()
		return (
			<div className={styles["modal-area"]}>
				<div className={styles["modal-box"]}>
					<div className={styles["modal-head"]}>
						<div className={styles["modal-title"]}>
							<span className={classnames(fontStyles["fa","fa-info-circle"])}></span>
							<span>提示</span>
						</div>	
						<div className={styles["modal-close-item"]}>
							<span></span>
						</div>	
					</div>
					<div className={styles["modal-content"]}>
						哈哈哈哈哈哈哈哈哈哈哈哈哈	
					</div>
					<div className={styles["modal-tool"]}>
						<div className={styles["btn-item"]}>取消</div>
						<div className={styles["btn-item"]}>确认</div>
					</div>
				</div>
			</div>	
		)

	}

	render(){
		return this.renderPanel()
	}
}

export default Modal
import React from 'react';
import { Link } from 'react-router-dom';

import * as styles from "./failPage.less";

const FailPage=({tip})=>{
	return (
		<div className={styles["fail-area"]}>
			<div className={styles["fail-box"]}>
				<div className={styles["fail-tip"]}>{tip}</div>
				<div className={styles["fail-back"]}>
				    <Link className={styles["back-btn"]} to={{
		                  pathname: '/',
		                  reload: true
		                }}>
		                返回首页
		            </Link>
				</div>	
			</div>
		</div>
	)

}

export default FailPage;
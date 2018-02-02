import React from "react";

import './header.less';
import * as mainStyles from '../public/style.less';
import * as styles from './header.less';

export default ()=>{
	return (
		<div>
			<div className={styles["head-area"]}>
				<div className={styles["head-title"]}>
					<h2 className={styles["title"]}>React问答</h2>
				</div>
			</div>
			<div className={styles["head-area-dispaly"]}>
				
			</div>	
		</div>
	)

}


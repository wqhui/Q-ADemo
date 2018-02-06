import React from 'react';
import * as style from './loading.less';

const Loading = () => <div className={style["loading-area"]}>
<div  className={style["loading-box"]}>
	<div>
		加载中
	</div>
	<div className={style["loading-dot-area"]}>
		<div className={style["loading-dot"]}></div>
		<div className={style["loading-dot"]}></div>
		<div className={style["loading-dot"]}></div>
	</div>
</div>
</div>; 

export default Loading;
import React from 'react';
import { Link } from 'react-router-dom';

import classnames from 'classnames';

import * as styles from "./breadcrumb.less";

const Breadcrumb=()=>{
	return(
        <div className={styles["breadcrumb"]}>                                      
            <Link className={classnames(styles["back-btn"],styles["breadcrumb-item"],styles["active"])} to={{
                  pathname: '/home',
                  reload: true
                }}>
                问题列表
            </Link>
            <span className={styles["breadcrumb-item"]}>/</span>
            <span className={styles["breadcrumb-item"]}>问题详情</span>
        </div>
	)
}

export default Breadcrumb;
import React from 'react';
import { connect } from 'react-redux'

import styles from './loading-bar.less';

const LoadingBar = (props) => {
  const classes = !props.visible ? `${styles.progress}` : `${styles.progress} ${styles.visible}`;

  return (
    <div className={classes}>
      <div className={styles.indeterminate} />
    </div>
  );
}

export default connect(
  (state) => ({ visible: state.loading })
)(LoadingBar)

import React, { Component, PropTypes } from 'react';

// styles
import styles from './loading-bar.less';

export default class LoadingBar extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.hidden !== nextProps.hidden;
  }
  render() {
    const classes = this.props.hidden ? `${ styles.progress }` : `${ styles.progress } ${ styles.visible }`;

    return (
      <div className={ classes }>
        <div className={ styles.indeterminate} ></div>
      </div>
    );
  }
};

LoadingBar.propTypes = {
  hidden: PropTypes.bool
};

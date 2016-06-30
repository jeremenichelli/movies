import React, { Component, PropTypes } from 'react';

// styles
import styles from '../styles/loading-bar.less';

export default class Card extends Component {
  propTypes: {
    hidden: PropTypes.boolean
  }
  render() {
    const classes = this.props.hidden ? `${ styles.progress }` : `${ styles.progress } ${ styles.visible }`;

    return (
      <div className={ classes }>
        <div className={ styles.indeterminate} ></div>
      </div>
    );
  }
}

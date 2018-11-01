import React, { Component } from 'react';

// styles
import styles from './card.less';

export default class Card extends Component {
  render() {
    const classes = this.props.hollow ? `${styles.card} ${styles.hollow}` : `${styles.card}`;

    return (
      <div className={classes} hidden={this.props.hidden}>
        {this.props.children}
      </div>
    );
  }
};

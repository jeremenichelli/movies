import React, { Component, PropTypes } from 'react';

// styles
import styles from './icon.less';

export default class Icon extends Component {
  propTypes: {
    type: PropTypes.string.isRequired
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <svg className={ styles.icon } viewBox="0 0 24 24" height="24" width="24"
        dangerouslySetInnerHTML={{ __html: `<use xlink:href="#${ this.props.type }"></use>` }}>
      </svg>
    );
  }
}

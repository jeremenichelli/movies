import React, { Component, PropTypes } from 'react';
import svgs from '../../helpers/svgs.js'

// styles
import styles from './icon.less';

// views

export default class Icon extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <svg
        className={ styles.icon }
        viewBox="0 0 24 24"
        height="24"
        width="24"
        dangerouslySetInnerHTML={{ __html: svgs[ this.props.type ] }}
      >
      </svg>
    );
  }
};

Icon.propTypes = {
  type: PropTypes.string.isRequired
};

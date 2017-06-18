import React, { Component } from 'react';

// components
import { Link } from 'react-router';
import LoadingBar from '../loading-bar/loading-bar.js';
import Icon from '../icon/icon.js';

// styles
import styles from './app.less';

const backIcon = <Icon type="back"></Icon>;
const homeSubtitle = <h2>Look up fast information about your favorite titles</h2>;
const moviePageSubtitle = <h2><Link to="/" className={ styles.back }>{ backIcon } Back to Search</Link></h2>;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };

    // bind events
    this.startLoading = this.startLoading.bind(this);
    this.stopLoading = this.stopLoading.bind(this);
  }
  startLoading() {
    this.setState({ loading: true });
  }
  stopLoading() {
    this.setState({ loading: false });
  }
  render() {
    return (
      <div className={ styles.app }>
        <LoadingBar hidden={ !this.state.loading }></LoadingBar>
        <header>
          <h1>Movies</h1>
          { this.props.location.pathname === '/' ? homeSubtitle : moviePageSubtitle }
        </header>
        <main className="view">
          { React.cloneElement(
              this.props.children,
              {
                startLoading: this.startLoading,
                stopLoading: this.stopLoading
              }
            )
          }
        </main>
      </div>
    );
  }
};

import React, { Component } from 'react';

// components
import { Link } from 'react-router';
import LoadingBar from './loading-bar.js';
import Icon from './icon.js';

// styles
import styles from '../styles/app.less';

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
          <h1>{ 'Movies' }</h1>
          <h2 hidden={
            this.props.location.pathname !== '/'
          }>{ 'Look up fast information about your favorite titles' }</h2>
          <h2 hidden={
            this.props.location.pathname === '/'
          }>
            <Link to="/" className={ styles.back }>
              <Icon type="back"></Icon>
              <span>{ 'Back to Search' }</span>
            </Link>
          </h2>
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

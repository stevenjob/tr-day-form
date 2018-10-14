import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as locationTypes from './locationTypes';

class Intro extends Component {
  static propTypes = {
    onLocationUpdate: PropTypes.func,
    config: PropTypes.object
  };

  handleClick = () => {
    this.props.onLocationUpdate(locationTypes.MAIN);
  };

  render() {
    const { intro, title } = this.props.config;

    return (
      <div>
        <div>{title}</div>
        <div>{intro}</div>
        <button onClick={this.handleClick}>Enter</button>
      </div>
    );
  }
}

export default Intro;

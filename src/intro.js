import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as locationTypes from './locationTypes';
import { css } from 'emotion';

const className = css`
  background-color: #0070bf;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const titleClassName = css`
  color: #fff;
  font-size: 3rem;
`;

const introClassName = css`
  color: #fff;
  padding: 3rem;
`;

class Intro extends Component {
  static propTypes = {
    onLocationUpdate: PropTypes.func,
    config: PropTypes.object
  };

  componentDidMount() {
    setTimeout(() => {
      this.props.onLocationUpdate(locationTypes.MAIN);
    }, 2000);
  }

  render() {
    const { intro, title } = this.props.config;

    return (
      <div className={className}>
        <div className={titleClassName}>{title}</div>
        <div className={introClassName}>{intro}</div>
      </div>
    );
  }
}

export default Intro;

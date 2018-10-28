import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Intro from './intro';
import Main from './main';
import * as locationTypes from './locationTypes';
import { css } from 'emotion';

const locations = {
  [locationTypes.INTRO]: Intro,
  [locationTypes.MAIN]: Main
};

const className = css`
  background-color: #efefef;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

class App extends Component {
  static propTypes = {
    config: PropTypes.object
  };

  state = {
    location: locationTypes.INTRO
  };

  handleLocationUpdate = newLocation => {
    this.setState({ location: newLocation });
  };

  render() {
    const { config } = this.props;
    if (!config) {
      return <div>error loading config</div>;
    }

    const Child = locations[this.state.location];

    return (
      <div className={className}>
        <Child onLocationUpdate={this.handleLocationUpdate} config={config} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Intro from './intro';
import Main from './main';
import * as locationTypes from './locationTypes';
import './app.css';

const locations = {
  [locationTypes.INTRO]: Intro,
  [locationTypes.MAIN]: Main
};

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
      <div className="App">
        <Child onLocationUpdate={this.handleLocationUpdate} config={config} />
      </div>
    );
  }
}

export default App;

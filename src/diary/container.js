import React, { Component } from 'react';
import Diary from './diary';
import * as storage from '../storage';

class DiaryContainer extends Component {
  state = {
    data: storage.get()
  };

  handleDataUpdate = data => {
    storage.set(data);
    this.setState({ data });
  };

  render() {
    const { data } = this.state;
    return (
      <Diary {...this.props} data={data} onDataUpdate={this.handleDataUpdate} />
    );
  }
}

export default DiaryContainer;

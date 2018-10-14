import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Day from './day';
import * as storage from './storage';
import * as moment from 'moment';

class Main extends Component {
  static propTypes = {
    config: PropTypes.object
  };

  state = {
    editing: false,
    date: null,
    data: null
  };

  componentDidMount() {
    const date = moment.utc().format('YYYY-MM-DD');
    const data = storage.get();
    this.setState({
      date,
      data,
      editing: !data[date]
    });
  }

  handleUpdateIsEditing = () => {
    this.setState(({ editing }) => {
      return {
        editing: !editing
      };
    });
  };

  handleDataUpdate = update => {
    const { date, data } = this.state;
    console.log('update', data, update);
    const newData = {
      ...data,
      [date]: {
        ...data[date],
        ...update
      }
    };

    storage.set(newData);
    this.setState({ data: newData });
  };

  handleIncrementDay = () => {
    this.setState(oldState => {
      const date = moment(oldState.date, 'YYYY-MM-DD')
        .add(1, 'days')
        .format('YYYY-MM-DD');

      return {
        date,
        editing: !oldState.data[date]
      };
    });
  };

  handleDecrementDay = () => {
    this.setState(oldState => {
      const date = moment(oldState.date, 'YYYY-MM-DD')
        .subtract(1, 'days')
        .format('YYYY-MM-DD');

      return {
        date,
        editing: !oldState.data[date]
      };
    });
  };

  render() {
    const { date, data, editing } = this.state;
    const { config } = this.props;

    if (!data || !date) {
      return <div>loading??</div>;
    }

    const formData = data[date];

    console.log('main', data);

    return (
      <div>
        <header>{config.title}</header>
        <Day
          onIncrementDay={this.handleIncrementDay}
          onDecrementDay={this.handleDecrementDay}
          date={date}
          onDataUpdate={this.handleDataUpdate}
          formData={formData}
          config={config}
          editing={editing}
          onUpdateIsEditing={this.handleUpdateIsEditing}
        />
      </div>
    );
  }
}

export default Main;

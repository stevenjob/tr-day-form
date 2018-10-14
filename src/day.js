import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './form';
import './day.css';

class Day extends Component {
  static propTypes = {
    onIncrementDay: PropTypes.func.isRequired,
    onDecrementDay: PropTypes.func.isRequired,
    date: PropTypes.string.isRequired,
    onDataUpdate: PropTypes.func.isRequired
  };

  render() {
    const {
      date,
      onDecrementDay,
      onIncrementDay,
      onDataUpdate,
      config,
      formData,
      editing,
      onUpdateIsEditing
    } = this.props;

    return (
      <div className="day">
        <div className="day-top">
          <button onClick={onDecrementDay}>{'<'}</button>
          <div>{date}</div>
          <button onClick={onIncrementDay}>{'>'}</button>
        </div>
        <Form
          config={config}
          data={formData}
          onDataUpdate={onDataUpdate}
          onUpdateIsEditing={onUpdateIsEditing}
          editing={editing}
        />
      </div>
    );
  }
}

export default Day;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as formTypes from './types';
import Number from './number';
import Text from './text';
import './form.css';

const formTypeMap = {
  [formTypes.NUMBER]: Number,
  [formTypes.TEXT]: Text
};

class Form extends Component {
  static propTypes = {
    config: PropTypes.object,
    data: PropTypes.object,
    onUpdateIsEditing: PropTypes.func.isRequired,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    data: {}
  };

  handleChange = (id, value) => {
    const { onDataUpdate, data } = this.props;

    onDataUpdate({
      ...data,
      [id]: value
    });
  };

  render() {
    const { config, data, onUpdateIsEditing, editing } = this.props;

    return (
      <div className="form">
        <div className="form-top">
          <button onClick={onUpdateIsEditing}>
            {editing ? 'Back to view' : 'Edit day'}
          </button>
        </div>
        {Object.keys(config.form).map(key => {
          const configKey = config.form[key];
          const value = data[key] || '';
          const Component = formTypeMap[configKey.type];
          return (
            <Component
              disabled={!editing}
              title={configKey.title}
              key={key}
              id={key}
              placeholder={configKey.placeholder}
              value={value}
              onChange={this.handleChange}
            />
          );
        })}
      </div>
    );
  }
}

export default Form;

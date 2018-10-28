import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as formTypes from './types';
import Number from './number';
import Text from './text';
import Checkbox from './checkbox';

const formTypeMap = {
  [formTypes.NUMBER]: Number,
  [formTypes.TEXT]: Text,
  [formTypes.CHECKBOX]: Checkbox
};

class Form extends Component {
  static propTypes = {
    config: PropTypes.object,
    data: PropTypes.object,
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
    const { config, data, disabled } = this.props;

    return (
      <>
        {Object.keys(config.form).map(key => {
          const configKey = config.form[key];
          const value = data[key] || '';
          const Component = formTypeMap[configKey.type];
          return (
            <Component
              disabled={!disabled}
              title={configKey.title}
              key={key}
              id={key}
              placeholder={configKey.placeholder}
              value={value}
              onChange={this.handleChange}
            />
          );
        })}
      </>
    );
  }
}

export default Form;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Number extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    title: PropTypes.string
  };

  handleChange = event => {
    console.log(event);
    const { onChange, id } = this.props;
    onChange(id, event.target.value);
  };

  render() {
    const { value, placeholder, title, disabled } = this.props;

    return (
      <div className="form-field form-number">
        <label>{title}</label>
        <input
          disabled={disabled}
          type="number"
          value={value}
          onChange={this.handleChange}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

export default Number;

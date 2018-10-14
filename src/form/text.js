import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Text extends Component {
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
      <div className="form-field form-text">
        <label>{title}</label>
        <textarea
          disabled={disabled}
          value={value}
          onChange={this.handleChange}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

export default Text;

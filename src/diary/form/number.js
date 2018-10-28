import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const className = css`
  background-color: #ffffff;
  padding: 1rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
`;

const labelClassName = css`
  margin-right: 1rem;
  margin-bottom: 0;
`;

const inputClassName = css`
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  width: 4rem;
`;

class Number extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    title: PropTypes.string
  };

  handleChange = event => {
    const { onChange, id } = this.props;
    onChange(id, event.target.value);
  };

  render() {
    const { value, placeholder, title, disabled } = this.props;

    return (
      <div className={className}>
        <label className={labelClassName}>{title}</label>
        <input
          className={inputClassName}
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

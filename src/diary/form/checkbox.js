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
  height: 2rem;
  position: relative;
  appearance: none;
  outline: none;
  background-color: #ffffff;
  border: 1px solid #d9dadc;
  border-radius: 50px;
  box-shadow: inset -2rem 0 0 0 #ffffff;
  transition-duration: 200ms;
  &:after {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: 1.8rem;
    height: 1.8rem;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
  }

  &:checked {
    border-color: #4ed164;
    box-shadow: inset 2rem 0 0 0 #4ed164;
  }

  &:checked&:after {
    left: 2rem;
    box-shadow: -2px 4px 3px rgba(0, 0, 0, 0.05);
  }

  &:disabled {
    background-color: rgb(235, 235, 228);
    box-shadow: inset 2rem 0 0 0 rgb(235, 235, 228);
    border-color: rgb(235, 235, 228);
  }
`;

class Checkbox extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.bool,
    placeholder: PropTypes.string,
    title: PropTypes.string
  };

  handleChange = event => {
    const { onChange, id } = this.props;
    onChange(id, event.target.checked);
  };

  render() {
    const { value, placeholder, title, disabled } = this.props;

    return (
      <div className={className}>
        <label className={labelClassName}>{title}</label>
        <input
          className={inputClassName}
          disabled={disabled}
          checked={value}
          onClick={this.handleChange}
          type="checkbox"
          placeholder={placeholder}
        />
      </div>
    );
  }
}

export default Checkbox;

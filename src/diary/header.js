import React from 'react';
import { css } from 'emotion';

const className = css`
  background-color: #0070bf;
  height: 3rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  color: #ffffff;
  border-bottom: 1px solid #0065a7;
`;

const Header = props => {
  return <div className={className}>{props.title}</div>;
};

export default Header;

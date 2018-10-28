import React from 'react';
import { css } from 'emotion';

const className = css`
  height: 2rem;
  background-color: white;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 1px solid #eeeeee;
`;

const ActionPanel = props => {
  const { onIsEditingChange, isEditing } = props;

  return (
    <div className={className}>
      <i
        onClick={() => onIsEditingChange(!isEditing)}
        className="material-icons"
      >
        {isEditing ? 'lock' : 'edit'}
      </i>
    </div>
  );
};

export default ActionPanel;

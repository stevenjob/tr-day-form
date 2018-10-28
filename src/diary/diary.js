import React, { useState, useEffect } from 'react';
import Header from './header';
import DaySelector, { useDaySelector } from './daySelector';
import ActionPanel from './actionPanel';
import Form from './form';
import { css } from 'emotion';

const className = css`
  & > div {
    margin-bottom: 1rem;
  }
`;

const Diary = props => {
  const { config, data, onDataUpdate } = props;
  const [date, setDate] = useDaySelector();
  const formData = data[date];
  const [isEditing, setIsEditing] = useState(true);

  useEffect(
    () => {
      // if date has changed we may want to reset to isEditingState
      setIsEditing(!formData);
    },
    [date]
  );

  return (
    <div className={className}>
      <div>
        <Header title={config.title} />
        <DaySelector date={date} setDate={setDate} />
        <ActionPanel isEditing={isEditing} onIsEditingChange={setIsEditing} />
      </div>
      <Form
        disabled={isEditing}
        config={config}
        data={formData}
        onDataUpdate={update =>
          onDataUpdate({
            ...data,
            [date]: {
              ...data[date],
              ...update
            }
          })
        }
      />
    </div>
  );
};

export default Diary;

import React, { useState, useEffect } from 'react';
import Header from './header';
import DaySelector, { useDaySelector } from './daySelector';
import ActionPanel from './actionPanel';
import Form from './form';

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
    <>
      <Header title={config.title} />
      <DaySelector date={date} setDate={setDate} />
      <ActionPanel isEditing={isEditing} onIsEditingChange={setIsEditing} />
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
    </>
  );
};

export default Diary;

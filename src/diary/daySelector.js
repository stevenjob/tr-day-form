import React, { useState } from 'react';
import * as moment from 'moment';
import { css } from 'emotion';

const currentDay = moment.utc().format('YYYY-MM-DD');

export const useDaySelector = () => {
  const [date, setDate] = useState(currentDay);

  return [date, setDate];
};

const increment = date =>
  moment(date, 'YYYY-MM-DD')
    .add(1, 'days')
    .format('YYYY-MM-DD');

const decrement = date =>
  moment(date, 'YYYY-MM-DD')
    .subtract(1, 'days')
    .format('YYYY-MM-DD');

const className = css`
  height: 2rem;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 1px solid #eeeeee;
`;

const buttonClassName = css`
  width: 2rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DaySelector = ({ date, setDate }) => {
  return (
    <div className={className}>
      <div className={buttonClassName} onClick={() => setDate(decrement(date))}>
        {'<'}
      </div>
      <div>{date}</div>
      <div className={buttonClassName} onClick={() => setDate(increment(date))}>
        {'>'}
      </div>
    </div>
  );
};

export default DaySelector;

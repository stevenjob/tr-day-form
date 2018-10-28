import React from 'react';
import Diary from './diary';

const Main = props => {
  return (
    <div>
      <Diary {...props} />
    </div>
  );
};

export default Main;

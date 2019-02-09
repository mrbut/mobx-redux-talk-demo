import React from 'react';
import Proptypes from 'prop-types';
import HistoryItem from './HistoryItem';

const History = ({ history, handleDeleteHistory }) => (
  <ul>
    {history.map(calculation => (
      <HistoryItem
        calculation={calculation.result}
        hID={calculation.hID}
        onClick={handleDeleteHistory}
        key={calculation.hID}
      />
    ))}
  </ul>
);

History.propTypes = {
  history: Proptypes.array.isRequired,
  handleDeleteHistory: Proptypes.func.isRequired
};

export default History;

import React from 'react';
import Proptypes from 'prop-types';
import HistoryItem from './HistoryItem';

const History = ({ calculations, handleDeleteHistory }) => (
  <ul>
    {calculations.map(calculation => (
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
  calculations: Proptypes.array.isRequired,
  handleDeleteHistory: Proptypes.func.isRequired
};

export default History;

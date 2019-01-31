import React from 'react';
import HistoryItem from './HistoryItem';

const History = ({ calculations, handleDeleteHistory }) => (
  <ul>
    {calculations.map(calculation => (
      <HistoryItem
        calculation={calculation.value}
        hID={calculation.hID}
        onClick={handleDeleteHistory}
        key={calculation.hID}
      />
    ))}
  </ul>
);

export default History;

import React from 'react';
import styled from 'styled-components';

const CalculatorOutputStyle = styled.div`
  text-align: right;
  h3 {
    font-size: 56px;
    span {
      position: absolute;
      left: -9999px;
      opacity: 0;
      height: 0;
      width: 0;
    }
  }
`;

const HistoryStyle = styled.span`
  font-weight: 500;
  font-size: 18px;
`;

const CalculatorOutput = ({ output, history }) => (
  <CalculatorOutputStyle>
    <h3>
      <span>Current Calculation</span>
      {output}
    </h3>
    <HistoryStyle>{history.join(' ')}</HistoryStyle>
  </CalculatorOutputStyle>
);

export default CalculatorOutput;

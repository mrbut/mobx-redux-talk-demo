import React, { useContext } from 'react';
import styled from 'styled-components';
import CalculatorOutput from './CalculatorOutput';

const CalculatorStyle = styled.section`
  background-color: #f8f8f8;
  height: 80vh;
  min-height: 756px;

  h2 {
    position: absolute;
    left: -9999px;
    opacity: 0;
    height: 0;
    width: 0;
  }
`;

const Calculator = props => {
  return (
    <CalculatorStyle>
      <h2>Calculator</h2>
      <CalculatorOutput output={1000} history={[200, '+']} />
    </CalculatorStyle>
  );
};

export default Calculator;

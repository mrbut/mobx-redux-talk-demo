import React, { useContext } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import PropTypes from 'prop-types';
import CalculatorOutput from './CalculatorOutput';
import CalculatorInput from './CalculatorInput';
import { ThemeContext } from '../context/ThemeContext';

const theme = {
  light: {
    bg: '#f8f8f8'
  },
  dark: {
    bg: '#0B0B0B'
  }
};

const CalculatorStyle = styled.section`
  background-color: ${props => theme[props.theme].bg};
  height: max-content;

  h2 {
    position: absolute;
    left: -9999px;
    opacity: 0;
    height: 0;
    width: 0;
  }
`;

const Calculator = ({ calculatorOutput, calculatorHistory }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <CalculatorStyle theme={theme}>
      <h2>Calculator</h2>
      <CalculatorOutput output={calculatorOutput} history={calculatorHistory} />
      <CalculatorInput />
    </CalculatorStyle>
  );
};

Calculator.propTypes = {
  calculatorOutput: PropTypes.number.isRequired,
  calculatorHistory: PropTypes.array.isRequired
};

export default Calculator;

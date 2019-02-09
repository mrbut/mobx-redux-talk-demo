import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CalculatorOutput from './CalculatorOutput';
import CalculatorInput from './CalculatorInput';
import { ThemeContext } from '../context/ThemeContext';
import CalculatorContext from '../context/CalculatorContext';

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

const Calculator = ({ calculatorOutput }) => {
  const { theme } = useContext(ThemeContext);
  const { inputNum, clear, negate, percent, updateCalculation, evaluate } = useContext(
    CalculatorContext
  );

  return (
    <CalculatorStyle theme={theme}>
      <h2>Calculator</h2>
      <CalculatorOutput output={calculatorOutput} />
      <CalculatorInput
        updateCalculation={updateCalculation}
        valFn={inputNum}
        clearFn={clear}
        negativeFn={negate}
        percentFn={percent}
        evalFn={evaluate}
      />
    </CalculatorStyle>
  );
};

Calculator.propTypes = {
  calculatorOutput: PropTypes.number.isRequired
};

export default Calculator;

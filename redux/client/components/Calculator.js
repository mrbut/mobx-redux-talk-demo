import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CalculatorOutput from './CalculatorOutput';
import CalculatorInput from './CalculatorInput';
import { ThemeContext } from '../context/ThemeContext';

import { connect } from 'react-redux';
import { calcInputNum } from '../actions';

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

const mapStateToProps = state => ({
  output: state.calculator.output
});

const mapDispatchToProps = dispatch => ({
  inputNum: num => dispatch(calcInputNum(num))
});

const Calculator = ({ output, calculatorOutput, calculatorHistory, inputNum }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <CalculatorStyle theme={theme}>
      <h2>Calculator</h2>
      <CalculatorOutput output={output} history={calculatorHistory} />
      <CalculatorInput valFn={inputNum} />
    </CalculatorStyle>
  );
};

Calculator.propTypes = {
  calculatorOutput: PropTypes.number.isRequired,
  calculatorHistory: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';
import { rem } from 'polished';

const theme = {
  light: {
    color: '#646464'
  },
  dark: {
    color: '#FFFFFF'
  }
};

const CalculatorOutputStyle = styled.div`
  text-align: right;
  padding: ${rem(74)} ${rem(45)} ${rem(40)};
  h3 {
    font-size: ${rem(56)};
    padding-bottom: ${rem(10)};
    color: ${props => theme[props.theme].color};
    font-variant-numeric: tabular-nums;
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
  font-size: ${rem(18)};
  color: ${props => theme[props.theme].color};
  font-variant-numeric: tabular-nums;
`;

const CalculatorOutput = ({ output, history }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <CalculatorOutputStyle theme={theme}>
      <h3>
        <span>Current Calculation</span>
        {output}
      </h3>
      <HistoryStyle theme={theme}>{history.join(' ')}</HistoryStyle>
    </CalculatorOutputStyle>
  );
};

CalculatorOutput.propTypes = {
  output: PropTypes.number.isRequired,
  history: PropTypes.array.isRequired
};

export default CalculatorOutput;

import React, { useContext, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';
import { ThemeContext } from '../context/ThemeContext';

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
  min-height: ${rem(198)};
  h3 {
    font-size: ${props => rem(props.fontSize)};
    padding-bottom: ${rem(10)};
    color: ${props => theme[props.theme].color};
    font-variant-numeric: tabular-nums;
    text-align: right;
    overflow: hidden;
    min-height: ${rem(67)};
    span:first-child {
      position: absolute;
      left: -9999px;
      opacity: 0;
      height: 0;
      width: 0;
    }
  }
`;

const CalculatorOutput = ({ output }) => {
  const { theme } = useContext(ThemeContext);

  const [textSize, setTextSize] = useState(56);
  const outputDOMNode = useRef(null);

  useEffect(() => {
    if (outputDOMNode.current.offsetWidth <= outputDOMNode.current.children[1].offsetWidth) {
      setTextSize(textSize ? textSize - 10 : 8);
    }
  });
  return (
    <CalculatorOutputStyle fontSize={textSize} theme={theme}>
      <h3 ref={outputDOMNode}>
        <span>Current Calculation</span>
        <span>{output}</span>
      </h3>
    </CalculatorOutputStyle>
  );
};

CalculatorOutput.propTypes = {
  output: PropTypes.number.isRequired
};

export default CalculatorOutput;

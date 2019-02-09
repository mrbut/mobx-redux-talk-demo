import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CalculatorBtn from './CalculatorBtn';

// SVGS
import AddIcon from './svg/addIcon';
import DivideIcon from './svg/divideIcon';
import EvalIcon from './svg/evalIcon';
import MultiplyIcon from './svg/multiplyIcon';
import NegativeIcon from './svg/negativeIcon';
import PercentIcon from './svg/percentIcon';
import SubtractIcon from './svg/subtractIcon';

const CalculatorInputStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  button:last-child {
    grid-column: -2;
  }
`;

const CalculatorInput = ({ clearFn, evalFn, negativeFn, percentFn, valFn, updateCalculation }) => {
  return (
    <CalculatorInputStyle>
      <CalculatorBtn onClick={clearFn}>AC</CalculatorBtn>
      <CalculatorBtn onClick={negativeFn}>
        <NegativeIcon />
      </CalculatorBtn>
      <CalculatorBtn onClick={percentFn}>
        <PercentIcon />
      </CalculatorBtn>
      <CalculatorBtn onClick={() => updateCalculation({ operator: 'divide' })}>
        <DivideIcon />
      </CalculatorBtn>

      <CalculatorBtn
        onClick={() => {
          valFn(7);
          updateCalculation({ operand: 7 });
        }}
      >
        7
      </CalculatorBtn>
      <CalculatorBtn
        onClick={() => {
          valFn(8);
          updateCalculation({ operand: 8 });
        }}
      >
        8
      </CalculatorBtn>
      <CalculatorBtn
        onClick={() => {
          valFn(9);
          updateCalculation({ operand: 9 });
        }}
      >
        9
      </CalculatorBtn>
      <CalculatorBtn onClick={() => updateCalculation({ operator: 'multiply' })}>
        <MultiplyIcon />
      </CalculatorBtn>

      <CalculatorBtn
        onClick={() => {
          valFn(4);
          updateCalculation({ operand: 4 });
        }}
      >
        4
      </CalculatorBtn>
      <CalculatorBtn
        onClick={() => {
          valFn(5);
          updateCalculation({ operand: 5 });
        }}
      >
        5
      </CalculatorBtn>
      <CalculatorBtn
        onClick={() => {
          valFn(6);
          updateCalculation({ operand: 6 });
        }}
      >
        6
      </CalculatorBtn>
      <CalculatorBtn onClick={() => updateCalculation({ operator: 'subtract' })}>
        <SubtractIcon />
      </CalculatorBtn>

      <CalculatorBtn
        onClick={() => {
          valFn(1);
          updateCalculation({ operand: 1 });
        }}
      >
        1
      </CalculatorBtn>
      <CalculatorBtn
        onClick={() => {
          valFn(2);
          updateCalculation({ operand: 2 });
        }}
      >
        2
      </CalculatorBtn>
      <CalculatorBtn
        onClick={() => {
          valFn(3);
          updateCalculation({ operand: 3 });
        }}
      >
        3
      </CalculatorBtn>
      <CalculatorBtn onClick={() => updateCalculation({ operator: 'add' })}>
        <AddIcon />
      </CalculatorBtn>

      <CalculatorBtn
        onClick={() => {
          valFn(0);
          updateCalculation({ operand: 0 });
        }}
      >
        0
      </CalculatorBtn>
      <CalculatorBtn onClick={evalFn} format="primary">
        <EvalIcon />
      </CalculatorBtn>
    </CalculatorInputStyle>
  );
};

CalculatorInput.propTypes = {
  clearFn: PropTypes.func.isRequired,
  evalFn: PropTypes.func.isRequired,
  negativeFn: PropTypes.func.isRequired,
  percentFn: PropTypes.func.isRequired,
  valFn: PropTypes.func.isRequired,
  updateCalculation: PropTypes.func.isRequired
};

export default CalculatorInput;

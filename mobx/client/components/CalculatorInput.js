import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CalculatorBtn from './CalculatorBtn';

// SVGS
import AddIcon from './svg/addIcon';
import DivideIcon from './svg/divideIcon';
import EvalIcon from './svg/evalIcon';
import Multiplycon from './svg/multiplyIcon';
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

const CalculatorInput = ({
  addFn,
  clearFn,
  divideFn,
  evalFn,
  multiplyFn,
  negativeFn,
  percentFn,
  subtractFn,
  valFn
}) => {
  return (
    <CalculatorInputStyle>
      <CalculatorBtn onClick={clearFn}>AC</CalculatorBtn>
      <CalculatorBtn onClick={negativeFn}>
        <NegativeIcon />
      </CalculatorBtn>
      <CalculatorBtn onClick={percentFn}>
        <PercentIcon />
      </CalculatorBtn>
      <CalculatorBtn onClick={divideFn}>
        <DivideIcon />
      </CalculatorBtn>

      <CalculatorBtn onClick={() => valFn(7)}>7</CalculatorBtn>
      <CalculatorBtn onClick={() => valFn(8)}>8</CalculatorBtn>
      <CalculatorBtn onClick={() => valFn(9)}>9</CalculatorBtn>
      <CalculatorBtn onClick={multiplyFn}>
        <Multiplycon />
      </CalculatorBtn>

      <CalculatorBtn onClick={() => valFn(4)}>4</CalculatorBtn>
      <CalculatorBtn onClick={() => valFn(5)}>5</CalculatorBtn>
      <CalculatorBtn onClick={() => valFn(6)}>6</CalculatorBtn>
      <CalculatorBtn onClick={subtractFn}>
        <SubtractIcon />
      </CalculatorBtn>

      <CalculatorBtn onClick={() => valFn(1)}>1</CalculatorBtn>
      <CalculatorBtn onClick={() => valFn(2)}>2</CalculatorBtn>
      <CalculatorBtn onClick={() => valFn(3)}>3</CalculatorBtn>
      <CalculatorBtn onClick={addFn}>
        <AddIcon />
      </CalculatorBtn>

      <CalculatorBtn onClick={() => valFn(0)}>0</CalculatorBtn>
      <CalculatorBtn onClick={evalFn} format="primary">
        <EvalIcon />
      </CalculatorBtn>
    </CalculatorInputStyle>
  );
};

CalculatorInput.propTypes = {
  addFn: PropTypes.func.isRequired,
  clearFn: PropTypes.func.isRequired,
  divideFn: PropTypes.func.isRequired,
  evalFn: PropTypes.func.isRequired,
  multiplyFn: PropTypes.func.isRequired,
  negativeFn: PropTypes.func.isRequired,
  percentFn: PropTypes.func.isRequired,
  subtractFn: PropTypes.func.isRequired,
  valFn: PropTypes.func.isRequired
};

export default CalculatorInput;

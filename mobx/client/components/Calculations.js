import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Proptypes from 'prop-types';

import Calculator from './Calculator';
import History from './History';

const CalculationsStyled = styled.main`
  height: 100%;
  display: grid;
  grid-template-areas: 'gt1 calc gt2 hist gt3';
  grid-template-columns: 1fr ${rem(428)} ${rem(76)} ${rem(345)} 1fr;
  grid-template-rows: 1fr;
  margin-bottom: ${rem(80)};

  > section:first-child {
    grid-area: calc;
  }

  > ul:last-child {
    grid-area: hist;
  }
`;

const Calculations = ({ history, handleDeleteHistory, output, outputHistory }) => (
  <CalculationsStyled>
    <Calculator calculatorOutput={output} calculatorHistory={outputHistory} />
    <History history={history} handleDeleteHistory={handleDeleteHistory} />
  </CalculationsStyled>
);

Calculations.propTypes = {
  calculations: Proptypes.array.isRequired,
  history: Proptypes.array.isRequired,
  handleDeleteHistory: Proptypes.func.isRequired,
  output: Proptypes.number.isRequired
};

export default Calculations;

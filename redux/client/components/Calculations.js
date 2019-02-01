import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';

import Calculator from './Calculator';
import History from './History';

const CalculationsStyled = styled.main`
  height: 100%;
  display: grid;
  grid-template-areas: 'gt1 calc gt2 hist gt3';
  grid-template-columns: 1fr 428px 76px 345px 1fr;
  grid-template-rows: 1fr;
  margin-bottom: 80px;

  > section:first-child {
    grid-area: calc;
  }

  > ul:last-child {
    grid-area: hist;
  }
`;

const Calculations = ({ calculations, handleDeleteHistory }) => (
  <CalculationsStyled>
    <Calculator calculatorOutput={1000} calculatorHistory={[200, '+']} />
    <History calculations={calculations} handleDeleteHistory={handleDeleteHistory} />
  </CalculationsStyled>
);

Calculations.propTypes = {
  calculations: Proptypes.array.isRequired,
  handleDeleteHistory: Proptypes.func.isRequired
};

export default Calculations;

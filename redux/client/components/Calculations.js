import React from 'react';
import styled from 'styled-components';
import Calculator from './Calculator';
import History from './History';

const CalculationsStyled = styled.main`
  height: 100%;
  display: grid;
  // prettier-ignore
  grid-template-areas: "gt1 calc gt2 hist gt3"
                       "gt1 calc gt2 hist gt3";
  grid-template-columns: 1fr 425px 76px 345px 1fr;
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
    <Calculator />
    <History calculations={calculations} handleDeleteHistory={handleDeleteHistory} />
  </CalculationsStyled>
);

export default Calculations;

import React, { useContext } from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';
import { ThemeContext } from '../context/ThemeContext';

const theme = {
  light: {
    bg: '#f0f0f0',
    bgHover: '#ee6f50',
    bgSvg: '#ffffff'
  },
  dark: {
    bg: '#1F1F1F',
    bgHover: '#EE6F50',
    bgSvg: '#ffffff'
  }
};

const HistoryItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${rem(2)} solid;
  font-family: 'Hk Grotesk', sans-serif;
  font-size: ${rem(20)};
  color: #e1e1e1;
  letter-spacing: ${rem(1.2)};
  padding-bottom: ${rem(30)};

  &:not(:first-of-type) {
    padding-top: ${rem(30)};
  }
  &:hover {
    border-color: #595959;
    color: #595959;
  }
`;

const CalculationStyle = styled.span`
  transform: translateY(${rem(2)});
`;

const DeleteButtonStyle = styled.button`
  padding: ${rem(10)} ${rem(10)} ${rem(8)};
  border-radius: 100%;
  border: none;
  background-color: ${props => theme[props.theme].bg};
  appearance: none;
  transition: background-color 0.1s ease-in;

  svg path {
    fill: ${props => theme[props.theme].bgSvg};
  }

  &:hover {
    background-color: ${props => theme[props.theme].bgHover};
  }
`;

const HistoryItem = ({ calculation, onClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <HistoryItemStyled>
      <CalculationStyle>
        Result:
        {calculation}
      </CalculationStyle>
      <DeleteButtonStyle theme={theme} onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 5 5">
          <path
            fill="#FFF"
            fillRule="evenodd"
            d="M2.14285714,2.14285714 L2.14285714,-2.06567089e-13 L2.85714286,-2.06435877e-13 L2.85714286,2.14285714 L5,2.14285714 L5,2.85714286 L2.85714286,2.85714286 L2.85714286,5 L2.14285714,5 L2.14285714,2.85714286 L0,2.85714286 L0,2.14285714 L2.14285714,2.14285714 Z"
            transform="rotate(45 2.475 2.56)"
          />
        </svg>
      </DeleteButtonStyle>
    </HistoryItemStyled>
  );
};

HistoryItem.propTypes = {
  calculation: Proptypes.number.isRequired,
  onClick: Proptypes.func.isRequired
};

export default HistoryItem;

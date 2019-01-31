import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const HistoryItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid;
  font-family: 'Hk Grotesk', sans-serif;
  font-size: 20px;
  color: #e1e1e1;
  letter-spacing: ${rem(1.2)};
  padding-bottom: ${rem(30)};
  padding-top: ${rem(30)};
`;

const DeleteButtonStyle = styled.button`
  width: ${rem(30)};
  height: ${rem(30)};

  svg path {
    fill: #ffffff;
  }
`;

const HistoryItem = ({ calculation, onClick }) => (
  <HistoryItemStyled>
    <span>{calculation}</span>
    <DeleteButtonStyle onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5">
        <path
          fill="#FFF"
          fill-rule="evenodd"
          d="M2.14285714,2.14285714 L2.14285714,-2.06567089e-13 L2.85714286,-2.06435877e-13 L2.85714286,2.14285714 L5,2.14285714 L5,2.85714286 L2.85714286,2.85714286 L2.85714286,5 L2.14285714,5 L2.14285714,2.85714286 L0,2.85714286 L0,2.14285714 L2.14285714,2.14285714 Z"
          transform="rotate(45 2.475 2.56)"
        />
      </svg>
    </DeleteButtonStyle>
  </HistoryItemStyled>
);

export default HistoryItem;

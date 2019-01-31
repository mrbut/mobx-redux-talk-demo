import React, { useContext } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const AvatarStyled = styled.span`
  appearance: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 100%;
  border: none;
  background-color: #ee6f50;
  color: #ffffff;
  font-family: 'Hk Grotesk', sans-serif;
  font-size: ${rem(16)};
  font-weight: 300;
`;

const Avatar = props => (
  <AvatarStyled>
    <span>{props.children}</span>
  </AvatarStyled>
);

export default Avatar;

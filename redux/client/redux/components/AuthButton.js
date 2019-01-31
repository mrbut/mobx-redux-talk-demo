import React, { useContext } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import Avatar from './Avatar';
import { ThemeContext } from '../context/ThemeContext';

const theme = {
  light: {
    bg: '#EEEEEE',
    bgHover: '#EE6F50',
    color: '#383838',
    colorHover: '#FFFFFF'
  },
  dark: {
    bg: '#0B0B0B',
    bgHover: '#EE6F50',
    color: '#FFFFFF',
    colorHover: '#FFFFFF'
  }
};

const AuthButtonStyle = styled.button`
  appearance: none;
  width: 172px;
  height: 52px;
  padding: 4px;
  display: flex;
  align-items: center;
  border-radius: 100px;
  border: none;
  text-transform: uppercase;
  letter-spacingew: ${rem(1.2)};
  font-size: 12px;

  &:hover {
    cursor: pointer;
  }
`;

const AuthenticatedButtonStyle = styled(AuthButtonStyle)`
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  transition: background-color 0.1s ease-in;
  justify-content: space-between;

  > span:first-child {
    color: ${props => theme[props.theme].color};
    opacity: 0;
    height: 0;
    width: 0;
    overflow: hidden;
    position: absolute;
    padding-left: 31px;
    transition: opacity 0.1s ease-in;
  }

  > span:last-child {
    margin-left: auto;
  }

  &:hover {
    background-color: ${props => theme[props.theme].bg};
    color: ${props => theme[props.theme].color};

    > span:first-child {
      opacity: 1;
      height: auto;
      width: auto;
      overflow: initial;
    }

    > span:nth-child(2) {
      opacity: 1;
    }
  }
`;

const VerticalBar = styled.span`
  background-color: #c0c0c0;
  width: 1px;
  height: 29px;
  position: absolute;
  right: 61px;
  opacity: 0;
  transition: opacity 0.1s ease-in;
`;

const UnAuthenticatedButtonStyle = styled(AuthButtonStyle)`
  background-color: ${props => theme[props.theme].bg};
  color: ${props => theme[props.theme].color};
  justify-content: center;

  &:hover {
    background-color: ${props => theme[props.theme].bgHover};
    color: ${props => theme[props.theme].colorHover};
  }
`;

const AuthenticatedButton = ({ children, theme }) => {
  return (
    <AuthenticatedButtonStyle theme={theme}>
      <span>Log out</span>
      <VerticalBar />
      <Avatar>{children}</Avatar>
    </AuthenticatedButtonStyle>
  );
};

const UnAuthenticatedButton = ({ theme }) => (
  <UnAuthenticatedButtonStyle theme={theme}>Save Calculation</UnAuthenticatedButtonStyle>
);

const AuthButton = ({ authenticated, children }) => {
  const { theme } = useContext(ThemeContext);

  return authenticated ? (
    <AuthenticatedButton theme={theme}>{children}</AuthenticatedButton>
  ) : (
    <UnAuthenticatedButton theme={theme} />
  );
};

export default AuthButton;

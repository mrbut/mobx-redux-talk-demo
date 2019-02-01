import React, { useContext } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { ThemeContext } from '../context/ThemeContext';

const theme = {
  light: {
    bg: 'white',
    fg: 'black'
  },
  dark: {
    bg: 'black',
    fg: 'white'
  }
};

const CircularButtonStyled = styled.button`
  appearance: none;
  padding: ${rem(20)};
  background-color: ${props => theme[props.theme].bg};
  color: ${props => theme[props.theme].fg};
`;

const CircularButton = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return <CircularButtonStyled theme={theme}>{children}</CircularButtonStyled>;
};

export default CircularButton;

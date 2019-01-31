import React, { useContext } from 'react';
import styled from 'styled-components';
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
  padding: 20px;
  background-color: ${props => theme[props.theme].bg};
  color: ${props => theme[props.theme].fg};

  &:hover {
    cursor: pointer;
  }
`;

const CircularButton = props => {
  const { theme } = useContext(ThemeContext);

  return <CircularButtonStyled theme={theme}>{props.children}</CircularButtonStyled>;
};

export default CircularButton;

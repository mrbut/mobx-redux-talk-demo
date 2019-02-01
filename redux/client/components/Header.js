import React, { useContext } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { ThemeContext } from '../context/ThemeContext';
import SimucalcLogo from './SimucalcLogo';
import AuthButton from './AuthButton';

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

const HeaderStyled = styled.header`
  color: ${props => theme[props.theme].fg};
  appearance: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 42px;

  h1 {
    font-family: 'Hk Grotesk', sans-serif;
    font-weight: 300;
    letter-spacing: ${rem(1.4)};

    span:last-child {
      display: inline-block;
      margin-left: ${rem(12)};
      transform: translateY(${rem(-16)});
    }
  }

  :last-child {
    margin-left: ${rem(7)};
  }
`;

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <HeaderStyled theme={theme}>
      <h1>
        <SimucalcLogo />
        <span>Simucalc</span>
      </h1>
      <AuthButton authenticated>M</AuthButton>
    </HeaderStyled>
  );
};

export default Header;

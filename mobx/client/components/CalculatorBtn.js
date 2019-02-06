import React, { useContext } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import PropTypes from 'prop-types';
import { ThemeContext } from '../context/ThemeContext';

const format = {
  primary: {
    bg: '#EE6F50',
    bgHover: '#ED2929',
    color: '#ffffff',
    colorHover: '#ffffff',
    colorFocus: '#ED2929',
    focus: '#2F2F2F'
  }
};

const theme = {
  light: {
    bg: '#F8F8F8',
    bgHover: '#d7d7d7',
    color: '#838383',
    colorHover: '#838383',
    colorFocus: '#FFFFFF',
    focus: '#2F2F2F'
  },
  dark: {
    bg: '#0B0B0B',
    bgHover: '#2A2A2A',
    color: '#BDBDBD',
    colorHover: '#FFFFFF',
    colorFocus: '#000000',
    focus: '#FFFFFF'
  }
};

const CalculatorBtnStyle = styled.button`
  appearance: none;
  border: none;
  width: ${rem(107)};
  height: ${rem(107)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${rem(18)};
  background-color: ${props =>
    props.format === 'primary' ? format.primary.bg : theme[props.theme].bg};
  color: ${props => (props.format === 'primary' ? format.primary.color : theme[props.theme].color)};

  svg path {
    fill: ${props =>
      props.format === 'primary' ? format.primary.color : theme[props.theme].color};
  }

  &:hover {
    background-color: ${props =>
      props.format === 'primary' ? format.primary.bgHover : theme[props.theme].bgHover};
  }

  &:focus {
    outline: none;
    background-color: ${props =>
      props.format === 'primary' ? format.primary.focus : theme[props.theme].focus};
    color: ${props =>
      props.format === 'primary' ? format.primary.colorFocus : theme[props.theme].colorFocus};

    svg path {
      fill: ${props =>
        props.format === 'primary' ? format.primary.colorFocus : theme[props.theme].colorFocus};
    }
  }
`;

const CalculatorBtn = ({ children, onClick, format }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <CalculatorBtnStyle
      type="button"
      format={format}
      theme={theme}
      onClick={e => {
        e.target.blur();
        onClick();
      }}
    >
      {children}
    </CalculatorBtnStyle>
  );
};

CalculatorBtn.defaultProps = {
  format: 'secondary'
};

CalculatorBtn.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  format: PropTypes.oneOf(['secondary', 'primary'])
};

export default CalculatorBtn;

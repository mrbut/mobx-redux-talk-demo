import React, { useContext } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { ThemeContext } from '../context/ThemeContext';

const theme = {
  light: {
    bg: 'white',
    color: '#535353'
  },
  dark: {
    bg: 'black',
    color: '#FFFFFF'
  }
};

const SwitchToggleStyled = styled.div`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  font-size: ${rem(14)};
  font-weight: 500;

  label {
    color: ${props => theme[props.theme].color};
    outline: none;
  }

  input[type='checkbox'] {
    pointer-events: none;
    outline: none;
  }
`;

const SwitchToggle = ({ onChange }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <SwitchToggleStyled theme={theme}>
      <label htmlFor="toggle">
        <input onChange={onChange} type="checkbox" name="toggle" id="toggle" />
        {`${theme[0].toUpperCase()}${theme.slice(1, theme.length)} mode`}
      </label>
    </SwitchToggleStyled>
  );
};

export default SwitchToggle;

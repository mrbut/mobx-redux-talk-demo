import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Switch from './Switch';

const FooterStyled = styled.div`
  position: fixed;
  bottom: ${rem(10)};
  left: ${rem(10)};
`;

const Footer = ({ handleThemeChange }) => (
  <FooterStyled>
    <Switch onChange={handleThemeChange} />
  </FooterStyled>
);

export default Footer;

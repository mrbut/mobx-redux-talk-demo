import React from 'react';
import styled from 'styled-components';
import Switch from './Switch';

const FooterStyled = styled.div`
  position: fixed;
  bottom: 10px;
  left: 10px;
`;

const Footer = ({ handleThemeChange }) => (
  <FooterStyled>
    <Switch onChange={handleThemeChange} />
  </FooterStyled>
);

export default Footer;

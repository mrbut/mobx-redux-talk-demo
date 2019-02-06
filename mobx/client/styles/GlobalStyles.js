import React from 'react';
import { createGlobalStyle } from 'styled-components';
import HKGroteskLightEOT from '../assets/fonts/HKGrotesk-Light.eot';
import HKGroteskLightWoff from '../assets/fonts/HKGrotesk-Light.woff';
import HKGroteskLightWoffII from '../assets/fonts/HKGrotesk-Light.woff2';
import HKGroteskMediumEOT from '../assets/fonts/HKGrotesk-Medium.eot';
import HKGroteskMediumWoff from '../assets/fonts/HKGrotesk-Medium.woff';
import HKGroteskMediumWoffII from '../assets/fonts/HKGrotesk-Medium.woff2';

const theme = {
  light: '#ffffff',
  dark: '#191919'
};

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Fonts */

  @font-face {
      font-family: 'HK Grotesk';
      font-weight: 500;
      font-style: normal;
      src: url(${HKGroteskMediumEOT}) /* IE9 Compat Modes */
      url(${HKGroteskMediumWoff}); format('woff'), /* Modern Browsers */
      url(${HKGroteskMediumWoffII}); format('woff2'), /* Modern Browsers */
  }

  @font-face {
      font-family: 'HK Grotesk';
      font-weight: 300;
      font-style: normal;
      src: url(${HKGroteskLightEOT}) /* IE9 Compat Modes */
      url(${HKGroteskLightWoff}); format('woff'), /* Modern Browsers */
      url(${HKGroteskLightWoffII}); format('woff2'), /* Modern Browsers */
  }


  // Global styles
  *, *::after, *::before {
    box-sizing: border-box;
  }
  
 body {
    background-color: ${props => theme[props.theme]};
    font-family: "Hk Grotesk", sans-serif;
    font-size: 16px;
    font-weight: 300;
    transition: background-color 0.7s ease-in;
  }
  
  button:hover,
  input[type="submit"] {
    cursor: pointer;
  }

`;

export default GlobalStyles;

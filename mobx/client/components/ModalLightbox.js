import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const ModalLightBoxStyle = styled.section`
  background-color: #ffffff;
  font-size: ${rem(16)};
  color: #000000;
  width: 90vw;
  max-width: ${rem(400)};
  height: max-content;
  padding: ${rem(47)} ${rem(42)} ${rem(47)};
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    font-size: ${rem(16)};
    font-weight: 500;
  }

  label + label span {
    margin-top: ${rem(32)};
  }

  label:last-of-type {
    display: block;
    margin-bottom: ${rem(40)};
  }

  input[type='text'],
  input[type='password'] {
    width: 100%;
    border: none;
    border-bottom: ${rem(2)} solid #bebebe;
    padding: ${rem(10)} 0 0;
  }
`;

const ModalLightbox = ({ children }) => <ModalLightBoxStyle>{children}</ModalLightBoxStyle>;

export default ModalLightbox;

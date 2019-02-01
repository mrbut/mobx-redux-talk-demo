import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const ButtonStyled = styled.button`
  appearance: none;
  padding: ${rem(20)};
  background-color: ${props => (props.format === 'primary' ? '#EE6F50' : '#F0F0F0')};
  color: #000000;
  border: none;
  font-size: ${rem(16)};
  min-width: ${rem(96)};

  &:hover {
    background-color: ${props => (props.format === 'primary' ? '#ED2929' : '#838383')};
    color: #ffffff;
  }
`;

const SubmitStyled = styled.input`
  appearance: none;
  padding: ${rem(20)};
  background-color: ${props => (props.format === 'primary' ? '#EE6F50' : '#F0F0F0')};
  border: none;
  color: #000000;
  font-size: ${rem(16)};
  min-width: ${rem(96)};

  &:hover {
    background-color: ${props => (props.format === 'primary' ? '#ED2929' : '#838383')};
    color: #ffffff;
  }
`;

const Button = ({ children, type, ...props }) => {
  if (type === 'submit') {
    return (
      <SubmitStyled type={type} {...props}>
        {children}
      </SubmitStyled>
    );
  }
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};

export default Button;

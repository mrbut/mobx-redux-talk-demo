import React, { useContext } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const GlobalNotificationStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  appearance: none;
  padding-top: ${rem(8)};
  padding-bottom: ${rem(0)};
  background-color: #000000;
  color: #ffffff;
  text-transform: uppercase;
  text-align: center;
  font-size: ${rem(14)};

  img {
    height: ${rem(40)};
  }

  span {
    margin-left: ${rem(2)};
    transform: translateY(${rem(-2)});
    letter-spacing: ${rem(1.12)};
  }
`;

const GlobalNotification = props => {
  return (
    <GlobalNotificationStyled>
      <img src={props.icon} />
      <span>{props.children}</span>
    </GlobalNotificationStyled>
  );
};

export default GlobalNotification;

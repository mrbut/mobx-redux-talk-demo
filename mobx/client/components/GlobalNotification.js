import React, { useContext } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const GlobalNotificationStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  appearance: none;
  padding-top: ${rem(15)};
  padding-bottom: ${rem(13)};
  background-color: #000000;
  color: #ffffff;
  text-transform: uppercase;
  text-align: center;
  font-size: ${rem(14)};

  img {
    height: ${rem(20)};
  }

  span {
    margin-left: ${rem(10)};
    letter-spacing: ${rem(1.12)};
  }
`;

const GlobalNotification = props => {
  return (
    <GlobalNotificationStyled>
      <img src={props.icon} alt="MobX Logo" />
      <span>{props.children}</span>
    </GlobalNotificationStyled>
  );
};

export default GlobalNotification;

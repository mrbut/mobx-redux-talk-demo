import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { rem } from 'polished';
import ModalLightbox from './ModalLightbox';
import SimucalcLogo from './SimucalcLogo';
import Button from './Button';

const ModalStyle = styled.div`
  display: ${props => (props.show ? 'flex' : 'none')};
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;

  form {
    width: 100%;
  }
  label {
    width: 100%;
  }
  label span {
    display: block;
  }

  input {
    outline: none;
    font-size: ${rem(16)};
  }
`;

const GlobalBodyStyle = createGlobalStyle`
  body {
    overflow: ${props => (props.show ? 'hidden' : 'auto')};
  }
`;

const SimucalcLogoStyle = styled(SimucalcLogo)`
  display: block;
  max-width: max-content;
  margin-top: ${rem(40)};
  margin-bottom: ${rem(40)};
`;

const ModalHeader = styled.h2`
  font-weight: 500;
  max-width: max-content;
  margin-bottom: ${rem(20)};
`;

const FormActionStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;

  div:last-child {
    flex: 1 0 100%;
    margin-top: ${rem(28)};

    button {
      appearance: none;
      border: none;
      text-decoration: underline;
      font-size: ${rem(16)};
      padding: 0;

      &:hover {
        border-bottom: 1px solid;
      }
    }
  }

  button:first-child {
    margin-right: ${rem(10)};
  }
`;

const handleSignUp = handleShowModal => {
  handleShowModal();
};

const Modal = ({ handleShowModal, showModal }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  console.log(showModal);
  return (
    <ModalStyle show={showModal}>
      <GlobalBodyStyle />
      <ModalLightbox>
        <SimucalcLogoStyle width={60} height={60} />
        <ModalHeader>
          {isLoggedIn ? 'Sign in & save away!' : 'Join & save your history!'}
        </ModalHeader>
        <form action="">
          <label htmlFor="username">
            <span>Username</span>
            <input
              type="text"
              id="username"
              name="username"
              value={usernameInput}
              onChange={event => setUsernameInput(event.target.value)}
            />
          </label>
          <label htmlFor="password">
            <span>Password</span>
            <input
              type="password"
              id="password"
              name="password"
              value={passwordInput}
              onChange={event => setPasswordInput(event.target.value)}
            />
          </label>
          <FormActionStyle>
            <Button
              onClick={event => {
                event.preventDefault();
                handleShowModal();
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                handleSignUp(handleShowModal);
              }}
              type="submit"
              value={isLoggedIn ? 'Sign in' : 'Sign up'}
              format="primary"
            />
            <div>
              {isLoggedIn ? 'Need and account? ' : 'Already have an account? '}
              <button
                type="button"
                onClick={event => {
                  event.preventDefault();
                  setIsLoggedIn(!isLoggedIn);
                }}
              >
                {isLoggedIn ? 'Sign up' : 'Sign in'}
              </button>
            </div>
          </FormActionStyle>
        </form>
      </ModalLightbox>
    </ModalStyle>
  );
};

export default Modal;

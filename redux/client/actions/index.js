import {
  SET_THEME,
  TOGGLE_MODAL,
  UPDATE_HISTORY,
  CALC_UPDATE,
  AUTHENTICATE_USER,
  CALC_EVAL,
  CALC_INPUT_PERCENT,
  CALC_INPUT_NUM,
  CALC_INPUT_NEGATE,
  CALC_CLEAR
} from '../consts/actionTypes';

// User Session
export const setTheme = theme => ({
  type: SET_THEME,
  payload: theme === 'light' ? 'dark' : 'light'
});

export const toggleModal = isShowing => ({
  type: TOGGLE_MODAL,
  payload: !isShowing
});

export const updateHistory = history => ({
  type: UPDATE_HISTORY,
  payload: history
});

// Calculator
export const calcInputNum = num => ({
  type: CALC_INPUT_NUM,
  payload: num
});

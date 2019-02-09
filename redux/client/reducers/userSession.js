import { SET_THEME, UPDATE_HISTORY, TOGGLE_MODAL, AUTHENTICATE_USER } from '../consts/actionTypes';

const initialState = {
  theme: { theme: 'light' },
  history: [],
  authenticated: false,
  showModal: false
};

function userSessionReducer(state = initialState, action) {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: { theme: action.payload } };
    case UPDATE_HISTORY:
      return { ...state, history: state.history.slice().push(action.payload) };
    case TOGGLE_MODAL:
      return { ...state, showModal: action.payload };
    case AUTHENTICATE_USER:
      return { ...state, authenticated: !state.authenticated };
    default:
      return state;
  }
}

export default userSessionReducer;

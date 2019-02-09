import { combineReducers } from 'redux';
import calculatorReducer from './calculator';
import userSessionReducer from './userSession';

const rootReducer = combineReducers({
  userSession: userSessionReducer,
  calculator: calculatorReducer
});

export default rootReducer;

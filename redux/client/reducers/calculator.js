import {
  CALC_CLEAR,
  CALC_EVAL,
  CALC_INPUT_NEGATE,
  CALC_INPUT_NUM,
  CALC_INPUT_PERCENT,
  CALC_UPDATE
} from '../consts/actionTypes';

const initialState = {
  output: 0,
  curInput: { operator: '', operand1: null, operand2: null },
  previousOutput: null
};

const calculatorReducer = (state = initialState, action) => {
  let result;
  let resultNum;
  switch (action.type) {
    case CALC_CLEAR:
      return initialState;
    case CALC_INPUT_NUM:
      if (state.previousOutput) {
        return { ...state, output: action.payload };
      }
      result =
        state.output === 0
          ? action.payload
          : `${state.output !== 0 ? state.output : ''}${action.payload}`;
      resultNum = Number(result);

      if (!state.curInput.operand1) {
        return {
          ...state,
          output: resultNum,
          curInput: { ...state.curInput, operand1: resultNum }
        };
      }
      return { ...state, output: resultNum };
    default:
      return state;
  }
};

export default calculatorReducer;

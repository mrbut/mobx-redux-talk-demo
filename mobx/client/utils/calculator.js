const add = (num, output) => {
  return output + num;
};

const subtract = (output, num) => {
  return output - num;
};

const multiply = (num, output) => {
  return output * num;
};

const divide = (output, num) => {
  return output / num;
};

export const inputTypes = {
  add: { input: '+', operator: add },
  subtract: { input: '-', operator: subtract },
  multiply: { input: '*', operator: multiply },
  divide: { input: '/', operator: divide }
};

export const matchOperator = (operator, reverse = false) => {
  switch (operator) {
    case '-':
      if (reverse) return inputTypes.add;
      return inputTypes.subtract;
    case '/':
      if (reverse) return inputTypes.multiply;
      return inputTypes.divide;
    case '*':
      if (reverse) return inputTypes.divide;
      return inputTypes.multiply;
    default:
      if (reverse) return inputTypes.subtract;
  }
  return this.inputTypes.add;
};

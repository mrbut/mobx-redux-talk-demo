export const inputTypes = {
  add: { input: '+', operator: this.add },
  subtract: { input: '-', operator: this.subtract },
  multiply: { input: '*', operator: this.multiply },
  divide: { input: '/', operator: this.divide }
};

export const matchOperator = (operator, reverse = false) => {
  switch (operator) {
    case '-':
      if (reverse) return this.inputTypes.add;
      return this.inputTypes.subtract;
    case '/':
      if (reverse) return this.inputTypes.multiply;
      return this.inputTypes.divide;
    case '*':
      if (reverse) return this.inputTypes.divide;
      return this.inputTypes.multiply;
    default:
      if (reverse) return this.inputTypes.subtract;
  }
  return this.inputTypes.add;
};

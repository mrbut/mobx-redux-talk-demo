import { observable } from 'mobx';
import { useObservable } from 'mobx-react-lite';

const CalculationStore = useObservable({

inputNum(num) {
  this.output = num === 0 ? num : `${this.output}num`;
}

updateHistory(...expression) {
  this.history.push(...expression);
}

updateCalculation(type, num) {
  const { input, operator } = this.inputTypes[type];
  // []
  if (!this.history.length && this.output) {
    this.history.push(input);
  }
  // [5, '+']
  if (this.lastInputIsOperator) {
    this.lastInput = input;
  } else {
    // [7, '+']
    // [7, '+', 7, ']
  }
}

add(num) {
  this.output = this.output + num;
}

subtract(num) {
  this.output = this.output - num;
}

multiply(num) {
  this.output = this.output * num;
}

divide(num) {
  this.output = this.output / num;
}

negateOutput() {
  this.output *= -1;
}
});

export default CalculationStore;

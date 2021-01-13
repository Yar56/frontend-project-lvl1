import startGameEngine from '../index.js';
import makeRandomNumber from '../utils.js';

export default () => {
  const generateDataAndAnswer = () => {
    const operations = ['+', '-', '*'];
    const randomOperation = operations[makeRandomNumber(0, operations.length) - 1];
    const firstOperand = makeRandomNumber(1, 20);
    const secondOperand = makeRandomNumber(1, 20);
    const expression = `${firstOperand} ${randomOperation} ${secondOperand}`;
    switch (randomOperation) {
      case '+':
        return [expression, (firstOperand + secondOperand).toString()];
      case '-':
        return [expression, (firstOperand - secondOperand).toString()];
      case '*':
        return [expression, (firstOperand * secondOperand).toString()];
      default:
        return undefined;
    }
  };

  return startGameEngine('What is the result of the expression?', generateDataAndAnswer);
};

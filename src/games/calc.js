import engine from '../index.js';

export default () => {
  const createExpression = () => {
    const operations = ['+', '-', '*'];
    const item = Math.round(Math.random() * operations.length);
    return `${engine.makeRandomNumber(1, 20)} ${operations[item]} ${engine.makeRandomNumber(1, 20)}`;
  };
  const parseExpression = (expression) => expression.split(' ');

  const resultExpression = (expression) => {
    const [firstOperand, operation, secondOperand] = parseExpression(expression);
    const firstIntValue = Number.parseInt(firstOperand, 10);
    const secondIntValue = Number.parseInt(secondOperand, 10);
    const sumOfNumbers = firstIntValue + secondIntValue;
    const differenceOfNumbers = firstIntValue - secondIntValue;
    const productOfNumbers = firstIntValue * secondIntValue;
    console.log([sumOfNumbers, differenceOfNumbers, productOfNumbers]);
    if (operation === '+' && (firstIntValue + secondIntValue === sumOfNumbers)) {
      return true;
    }
    if (operation === '-' && (firstIntValue - secondIntValue === differenceOfNumbers)) {
      return true;
    }
    if (operation === '*' && (firstIntValue * secondIntValue === productOfNumbers)) {
      return true;
    }
    return false;
  };
  const answer = (expression) => {
    const [firstOperand, operation, secondOperand] = parseExpression(expression);
    const firstIntValue = Number.parseInt(firstOperand, 10);
    const secondIntValue = Number.parseInt(secondOperand, 10);
    const sumOfNumbers = firstIntValue + secondIntValue;
    const differenceOfNumbers = firstIntValue - secondIntValue;
    const productOfNumbers = firstIntValue * secondIntValue;
    switch (operation) {
      case '+':
        return sumOfNumbers;
      case '-':
        return differenceOfNumbers;
      case '*':
        return productOfNumbers;
      default:
        return undefined;
    }
  };
  return engine.loop('What is the result of the expression?', createExpression, resultExpression, answer);
};

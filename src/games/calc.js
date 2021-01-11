import engine from '../index.js';

export default () => {
  const createExpression = () => {
    const operations = ['+', '-', '*'];
    const item = Math.floor(Math.random() * operations.length);
    return `${engine.makeRandomNumber(1, 20)} ${operations[item]} ${engine.makeRandomNumber(1, 20)}`;
  };
  const parseExpressionFromString = (expression) => expression.split(' ');

  const getRightAnswer = (expression) => {
    const [firstOperand, operation, secondOperand] = parseExpressionFromString(expression);
    const firstIntValue = Number.parseInt(firstOperand, 10);
    const secondIntValue = Number.parseInt(secondOperand, 10);
    const sumOfNumbers = firstIntValue + secondIntValue;
    const differenceOfNumbers = firstIntValue - secondIntValue;
    const productOfNumbers = firstIntValue * secondIntValue;
    switch (operation) {
      case '+':
        return sumOfNumbers.toString();
      case '-':
        return differenceOfNumbers.toString();
      case '*':
        return productOfNumbers.toString();
      default:
        return undefined;
    }
  };
  return engine.loop('What is the result of the expression?', createExpression, getRightAnswer);
};

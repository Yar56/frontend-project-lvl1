import engine from '../index.js';

export default () => {
  const wrapper = () => {
    const operations = ['+', '-', '*'];
    const item = Math.floor(Math.random() * operations.length);
    const expression = `${engine.makeRandomNumber(1, 20)} ${operations[item]} ${engine.makeRandomNumber(1, 20)}`;
    const [firstOperand, operation, secondOperand] = expression.split(' ');
    const firstIntValue = Number.parseInt(firstOperand, 10);
    const secondIntValue = Number.parseInt(secondOperand, 10);
    const sumOfNumbers = firstIntValue + secondIntValue;
    const differenceOfNumbers = firstIntValue - secondIntValue;
    const productOfNumbers = firstIntValue * secondIntValue;
    // const result = [expression];
    let answer = '';
    switch (operation) {
      case '+':
        answer = sumOfNumbers;
        return [expression, answer];
      case '-':
        answer = differenceOfNumbers;
        return [expression, answer];
      case '*':
        answer = productOfNumbers;
        return [expression, answer];
      default:
        return undefined;
    }
  };

  return engine.loop('What is the result of the expression?', wrapper);
};

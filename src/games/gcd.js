import engine from '../index.js';

export default () => {
  const createNumbers = () => {
    const firstNumber = Math.floor(engine.makeRandomNumber(1, 110));
    const secondNumber = Math.ceil(engine.makeRandomNumber(1, 60));
    return `${firstNumber} ${secondNumber}`;
  };
  const parseNumbersFromString = (numbers) => numbers.split(' ');
  const findGcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return findGcd(b, a % b);
  };

  const getRightAnswer = (numbers) => {
    const [first, second] = parseNumbersFromString(numbers);
    return findGcd(first, second).toString();
  };
  return engine.loop('Find the greatest common divisor of given numbers.', createNumbers, getRightAnswer);
};

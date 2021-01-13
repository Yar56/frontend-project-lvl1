import startGameEngine from '../index.js';
import makeRandomNumber from '../utils.js';

export default () => {
  const generateDataAndAnswer = () => {
    const firstNumber = Math.floor(makeRandomNumber(1, 110));
    const secondNumber = Math.ceil(makeRandomNumber(1, 60));
    const numbers = `${firstNumber} ${secondNumber}`;
    const findGcd = (a, b) => {
      if (b === 0) {
        return a;
      }
      return findGcd(b, a % b);
    };
    const answer = findGcd(firstNumber, secondNumber);
    const result = [numbers, answer.toString()];
    return result;
  };
  return startGameEngine('Find the greatest common divisor of given numbers.', generateDataAndAnswer);
};

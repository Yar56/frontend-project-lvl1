import startGameEngine from '../index.js';
import makeRandomNumber from '../utils.js';

export default () => {
  const generateDataAndAnswer = () => {
    const number = makeRandomNumber(2, 30);
    const isPrime = (num) => {
      for (let i = 2; i < num; i += 1) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    };
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    return [number, correctAnswer];
  };
  startGameEngine('Answer "yes" if given number is prime. Otherwise answer "no".', generateDataAndAnswer);
};

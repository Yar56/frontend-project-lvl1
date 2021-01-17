import startEngine from '../index.js';
import makeRandomNumber from '../utils.js';

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateDataAndAnswer = () => {
  const gameQuestion = makeRandomNumber(0, 100);
  const correctAnswer = isPrime(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, correctAnswer];
};

export default () => startEngine(descriptionGame, generateDataAndAnswer);

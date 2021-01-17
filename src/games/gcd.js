import startEngine from '../index.js';
import makeRandomNumber from '../utils.js';

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
};

const generateDataAndAnswer = () => {
  const firstNumber = Math.floor(makeRandomNumber(1, 110));
  const secondNumber = Math.ceil(makeRandomNumber(1, 60));
  const gameQuestion = `${firstNumber} ${secondNumber}`;
  const correctAnswer = findGcd(firstNumber, secondNumber);
  return [gameQuestion, correctAnswer.toString()];
};

export default () => startEngine(descriptionGame, generateDataAndAnswer);

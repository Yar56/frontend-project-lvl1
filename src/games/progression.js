import startEngine from '../index.js';
import makeRandomNumber from '../utils.js';

const descriptionGame = 'What number is missing in the progression?';

const generateDataAndAnswer = () => {
  const gameQuestion = [];
  const lengthProgression = makeRandomNumber(5, 10);
  const randomStep = makeRandomNumber(2, 5);
  for (let i = randomStep; i < lengthProgression * randomStep; i += randomStep) {
    gameQuestion.push(i);
  }
  const randomIndex = makeRandomNumber(0, gameQuestion.length - 1);
  const correctAnswer = gameQuestion[randomIndex];
  gameQuestion[randomIndex] = '..';
  return [gameQuestion.join(' '), correctAnswer.toString()];
};

export default () => startEngine(descriptionGame, generateDataAndAnswer);

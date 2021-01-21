import startEngine from '../index.js';
import makeRandomNumber from '../utils.js';

const isEven = (numb) => numb % 2 === 0;
const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestionAndAnswer = () => {
  const gameQuestion = makeRandomNumber(2, 30);
  const correctAnswer = isEven(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, correctAnswer];
};

export default () => startEngine(descriptionGame, generateQuestionAndAnswer);

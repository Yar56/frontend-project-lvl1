import startEngine from '../index.js';
import makeRandomNumber from '../utils.js';

const descriptionGame = 'What is the result of the expression?';

const getDataGame = (expression, answer) => [expression, answer.toString()];

const getCorrectAnswer = (operation, firstOperand, secondOperand) => {
  switch (operation) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      return null;
  }
};

const generateQuestionAndAnswer = () => {
  const operations = ['+', '-', '*'];
  const randomOperation = operations[makeRandomNumber(0, operations.length) - 1];
  const firstOperand = makeRandomNumber(1, 20);
  const secondOperand = makeRandomNumber(1, 20);
  const gameQuestion = `${firstOperand} ${randomOperation} ${secondOperand}`;
  const correctAnswer = getCorrectAnswer(randomOperation, firstOperand, secondOperand);
  return getDataGame(gameQuestion, correctAnswer);
};

export default () => startEngine(descriptionGame, generateQuestionAndAnswer);

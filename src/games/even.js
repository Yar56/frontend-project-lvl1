import startGameEngine from '../index.js';
import makeRandomNumber from '../utils.js';

export default () => {
  const generateDataAndAnswer = () => {
    const number = makeRandomNumber(2, 30);

    const isEven = (numb) => numb % 2 === 0;
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    const result = [number, correctAnswer];
    return result;
  };

  startGameEngine('Answer "yes" if the number is even, otherwise answer "no".', generateDataAndAnswer);
};

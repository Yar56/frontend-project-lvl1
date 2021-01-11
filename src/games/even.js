import engine from '../index.js';

export default () => {
  const createNumber = () => engine.makeRandomNumber(2, 30);
  // const checkNumberIsEven = (number) => (number % 2 === 0);

  const getRightAnswer = (number) => {
    if (number % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };

  return engine.loop('Answer "yes" if the number is even, otherwise answer "no".', createNumber, getRightAnswer);
};

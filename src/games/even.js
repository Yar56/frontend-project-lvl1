import engine from '../index.js';

export default () => {
  const isEven = (number) => {
    if (number % 2 === 0) {
      return true;
    }
    return false;
  };
  const isAnswer = (number) => {
    if (number % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };

  const createNumber = () => engine.makeRandomNumber(2, 30);

  return engine.loop('Answer "yes" if the number is even, otherwise answer "no".', createNumber, isEven, isAnswer);
};

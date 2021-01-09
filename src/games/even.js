import engine from '../index.js';

export default () => {
  const createNumber = () => engine.makeRandomNumber(2, 30);

  const isEven = (number) => {
    if (number % 2 === 0) {
      return true;
    }
    return false;
  };
  const answer = (number) => {
    if (number % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };

  return engine.loop('Answer "yes" if the number is even, otherwise answer "no".', createNumber, isEven, answer);
};

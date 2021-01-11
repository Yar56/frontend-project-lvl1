import engine from '../index.js';

export default () => {
  const createNumber = () => engine.makeRandomNumber(2, 30);

  const getRightAnswer = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  engine.loop('Answer "yes" if given number is prime. Otherwise answer "no".', createNumber, getRightAnswer);
};

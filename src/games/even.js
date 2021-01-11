import engine from '../index.js';

export default () => {
  const wrapper = () => {
    const number = engine.makeRandomNumber(2, 30);
    let answer = '';
    if (number % 2 === 0) {
      answer = 'yes';
    } else {
      answer = 'no';
    }
    const result = [number, answer];
    return result;
  };

  return engine.loop('Answer "yes" if the number is even, otherwise answer "no".', wrapper);
};

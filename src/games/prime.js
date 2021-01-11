import engine from '../index.js';

export default () => {
  const wrapper = () => {
    const number = engine.makeRandomNumber(2, 30);
    let answer = 'yes';
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        answer = 'no';
        return [number, answer];
      }
    }
    return [number, answer];
  };
  engine.loop('Answer "yes" if given number is prime. Otherwise answer "no".', wrapper);
}
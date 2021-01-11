import engine from '../index.js';

export default () => {
  const wrapper = () => {
    const firstNumber = Math.floor(engine.makeRandomNumber(1, 110));
    const secondNumber = Math.ceil(engine.makeRandomNumber(1, 60));
    const numbers = `${firstNumber} ${secondNumber}`;
    const findGcd = (a, b) => {
      if (b === 0) {
        return a;
      }
      return findGcd(b, a % b);
    };
    const [firstNumb, secondNumb] = numbers.split(' ');
    const answer = findGcd(firstNumb, secondNumb);
    const result = [numbers, answer];
    return result;
  };
  return engine.loop('Find the greatest common divisor of given numbers.', wrapper);
};

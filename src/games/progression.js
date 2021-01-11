import engine from '../index.js';

export default () => {
  const createArithmeticProgression = () => {
    const arrayForProgression = [];
    const lengthProgression = [16, 20, 38];
    const steps = [2, 3, 5];
    const randomItem = Math.floor(Math.random() * lengthProgression.length);
    const randomLength = lengthProgression[randomItem];
    const randomStep = steps[randomItem];
    for (let num = randomStep; num <= randomLength; num += randomStep) {
      arrayForProgression.unshift(num);
    }
    const sortProgression = arrayForProgression.sort((a, b) => a - b);
    const randomSplice = Math.floor(Math.random() * sortProgression.length);
    sortProgression.splice(randomSplice, 1, '..');
    return sortProgression.join(' ');
  };
  const parseExpressionFromString = (progression) => progression.split(' ');
  const getRightAnswer = (progression) => {
    return 'a'
  }

  return engine.loop('What number is missing in the progression?', createArithmeticProgression, getRightAnswer);
};

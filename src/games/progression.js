import engine from '../index.js';

export default () => {
  const wrapper = () => {
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
    const answer = sortProgression.splice(randomSplice, 1, '..');
    const progression =  sortProgression.join(' ');

    return [progression, answer];
  };
  return engine.loop('What number is missing in the progression?', wrapper);
}
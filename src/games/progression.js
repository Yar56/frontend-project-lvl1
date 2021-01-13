import startGameEngine from '../index.js';
import makeRandomNumber from '../utils.js';

export default () => {
  const generateDataAndAnswer = () => {
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
    const randomSplice = makeRandomNumber(0, sortProgression.length) - 1;
    const answer = sortProgression.splice(randomSplice, 1, '..');
    const progression = sortProgression.join(' ');

    return [progression, answer.toString()];
  };
  return startGameEngine('What number is missing in the progression?', generateDataAndAnswer);
};

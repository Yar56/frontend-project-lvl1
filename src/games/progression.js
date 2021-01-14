import startGameEngine from '../index.js';
import makeRandomNumber from '../utils.js';

export default () => {
  const generateDataAndAnswer = () => {
    const progressions = [];
    const lengthProgression = makeRandomNumber(5, 10);
    const randomStep = makeRandomNumber(2, 5);
    for (let i = randomStep; i < lengthProgression * randomStep; i += randomStep) {
      progressions.push(i);
    }
    const randomIndex = makeRandomNumber(0, progressions.length - 1);
    const answer = progressions[randomIndex];
    progressions[randomIndex] = '..';
    return [progressions.join(' '), answer.toString()];
  };
  return startGameEngine('What number is missing in the progression?', generateDataAndAnswer);
};

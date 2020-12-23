// import readlineSync from 'readline-sync';
import getName from './cli.js';

export default {
  getName() {
    return getName();
  },
  makeRandomArray(min, max, length) {
    const minRange = min;
    const maxRange = max;
    const lengthArrayAnswer = length;
    const numbers = [];
    for (let i = 0; i <= lengthArrayAnswer - 1; i += 1) {
      numbers[i] = Math.ceil(Math.random() * (maxRange - minRange) + minRange);
    }
    return numbers;
  },
  // loop(data) {
  //   for (let i = 0; i <= 3 - 1; i += 1) {
  //     console.log(`Question: ${data}`);
  //     const answer = readlineSync.question('Your answer: ');
  //   }
  //   можно через loop засунуть функцию которая будет в игре отвечать за логику
  // },
};

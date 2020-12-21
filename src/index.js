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
  // loop() {

  // },
};

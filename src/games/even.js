import engine from '../index.js';

export default () => {
  const numbers = engine.makeRandomArray(1, 20, 3);

  const isEven = (nums) => nums.map((item) => {
    if (item % 2 === 0) {
      return true;
    }
    return false;
  });
  function isAnswer(nums) {
    for (let i = 0; i <= nums.length; i += 1) {
      return nums[i] % 2 === 0 ? 'yes' : 'no';
    }
  }

  return engine.loop('Answer "yes" if the number is even, otherwise answer "no".', numbers, isEven, isAnswer);
};

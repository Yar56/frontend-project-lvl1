import engine from '../index.js';

export default () => {
  const numbers1 = engine.makeRandomArray(1, 30, 3);
  const numbers2 = engine.makeRandomArray(1, 30, 3);
  const operations = ['*', '-', '+'];
  const createExpression = (nums1, nums2, oper) => {
    const { length } = nums1;
    const result = [];
    for (let i = 0; i < length; i += 1) {
      result.push(`${nums1[i]} ${oper[i]} ${nums2[i]}`);
    }
    return result;
  };
  const results = (nums1, nums2, oper) => {
    for (let i = 0; i < nums1.length; i += 1) {
      if (oper[i] === '*' && nums1[i] * nums2[i]) {
        return true;
      }
      if (oper[i] === '-' && nums1[i] - nums2[i]) {
        return true;
      }
      if (oper[i] === '+' && nums1[i] + nums2[i]) {
        return true;
      }
      return false;
    }
    return false;
  };

  const data = createExpression(numbers1, numbers2, operations);
  const resultsExpressions = results(numbers1, numbers2, operations);

  return engine.loop('What is the result of the expression?', data, resultsExpressions);
};

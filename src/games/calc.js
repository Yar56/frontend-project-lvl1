import engine from '../index.js';

export default () => {
  const numbers1 = engine.makeRandomArray(1, 30, 3);
  const numbers2 = engine.makeRandomArray(1, 30, 3);
  const operations = ['*', '-', '+'];
  const createExpression = (nums1, nums2, oper) => {
    // const expression = [nums1, oper, nums2];
    // let string = '';
    // const result = expression.map((item, i) => {
      // if (Number.isInteger(item[i])) {
      //   item[i].toString();
      // }
      // string += `${item[i]} `;
      // console.log(item)
    // });
    // console.log(result);
  };
  const data = createExpression(numbers1, numbers2, operations);

  return engine.loop('What is the result of the expression?', data);
};

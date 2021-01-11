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
    const s = sortProgression.splice(randomSplice, 1, '..');
    return sortProgression.join(' ');
  };
  const parseExpressionFromString = (progression) => progression.split(' ');

  const getRightAnswer = (progression) => {
    const array = parseExpressionFromString(progression);
    const parse = array
      .map((string) => parseInt(string, 10))
      .filter((num) => Number.isInteger(num));
    console.log(parse);

    const findMissingUtil = (arr, low, high, diff) => {
      if (high <= low) {
        return Number.MAX_SAFE_INTEGER;
      }
      const mid = low + (high - low) / 2;
      // console.log(mid);
      if (arr[mid + 1] - arr[mid] !== diff) {
        return (arr[mid] + diff);
      }
      if (mid > 0 && arr[mid] - arr[mid - 1] !== diff) {
        return (arr[mid - 1] + diff);
      }
      if (arr[mid] === arr[0] + mid * diff) {
        return findMissingUtil(arr, mid + 1, high, diff);
      }
      return findMissingUtil(arr, low, mid - 1, diff);
    };

    const findMissing = (arr, n) => {
      // Если отсутствует только один элемент, то
      // мы можем найти разницу арифметики
      // прогрессия по следующей формуле.
      // Пример, 2, 4, 6, 10, diff = (10-2) / 4 = 2.
      // В формуле предполагается, что
      // разница - это целое число
      const diff = (arr[n - 1] - arr[0]) / n;
      // Двоичный поиск пропущенного числа
      // используя выше вычисленный diff
      return findMissingUtil(arr, 0, n - 1, diff);
    };
    const n = parse.length;
    const find = (findMissing(parse, n));
    // console.log(find.toString());
    return find.toString();
  };

  return engine.loop('What number is missing in the progression?', createArithmeticProgression, getRightAnswer);
};

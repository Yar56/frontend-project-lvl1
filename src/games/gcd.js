import readlineSync from 'readline-sync';
import engine from '../index.js';

export default () => {
  const nameUser = engine.getName();
  console.log('Find the greatest common divisor of given numbers.');
  const numbers1 = engine.makeRandomArray(2, 100, 3).map((item) => Math.ceilgit(item / 2));
  const numbers2 = engine.makeRandomArray(2, 100, 3).map((item) => Math.ceil(item / 2));

  const findDivisors = (num, divisor = []) => {
    for (let i = 1; i <= num; i += 1) {
      if (num % i === 0) {
        divisor.unshift(i);
      }
    }
    return divisor;
  };
  const findGreatestDiv = (div, num1, num2) => {
    const commonDivisors = div.filter((item) => num1 % item === 0 && num2 % item === 0);
    return [Math.max(...commonDivisors)];
  };

  for (let i = 0; i <= numbers1.length - 1; i += 1) {
    console.log(`Question: ${numbers1[i]} ${numbers2[i]}`);
    const answer = readlineSync.question('Your answer: ');
    const wrongAnswer = (right, wrong = answer, name = nameUser) => `'${wrong}' is wrong answer ;(. Correct answer was '${right}'.\nLet's try again, ${name}!`;

    // нахожу все делители чисел
    const divisors1 = findDivisors(numbers1[i]);
    const divisors2 = findDivisors(numbers2[i]);
    // нахожу самые большые делители
    const greatest1 = findGreatestDiv(divisors1, numbers1[i], numbers2[i]);
    const greatest2 = findGreatestDiv(divisors2, numbers1[i], numbers2[i]);
    // вывожу в результат одно число
    const result = [...new Set([...greatest1, ...greatest2])].join('');
    if (answer === result) {
      console.log('Correct!');
    } else {
      console.log(wrongAnswer(result));
      return;
    }
  }
  console.log(`Congratulations, ${nameUser}!`);
};

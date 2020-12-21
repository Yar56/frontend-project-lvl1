import readlineSync from 'readline-sync';
import engine from '../index.js';

export default () => {
  const nameUser = engine.getName();
  console.log('What is the result of the expression?');
  const numbers1 = engine.makeRandomArray(1, 30, 3);
  const numbers2 = engine.makeRandomArray(1, 30, 3);
  const operations = ['*', '-', '+'];

  for (let i = 0; i <= operations.length - 1; i += 1) {
    const sum = (numbers1[i] + numbers2[i]).toString();
    const difference = (numbers1[i] - numbers2[i]).toString();
    const product = (numbers1[i] * numbers2[i]).toString();

    const randomOperation = operations[Math.floor(Math.random() * operations.length)];
    console.log(`Question: ${numbers1[i]} ${randomOperation} ${numbers2[i]}`);

    const answer = readlineSync.question('Your answer: ');
    const wrongAnswer = (right, wrong = answer, name = nameUser) => `'${wrong}' is wrong answer ;(. Correct answer was '${right}'.\nLet's try again, ${name}!`;

    if (randomOperation === '+') {
      if (answer === sum) {
        console.log('Correct!');
      } else if (answer !== sum) {
        console.log(wrongAnswer(sum));
        return;
      }
    } else if (randomOperation === '-') {
      if (answer === difference) {
        console.log('Correct!');
      } else if (answer !== difference) {
        console.log(wrongAnswer(difference));
        return;
      }
    } else if (randomOperation === '*') {
      if (answer === product) {
        console.log('Correct!');
      } else if (answer !== product) {
        console.log(wrongAnswer(product));
        return;
      }
    }
  }
  console.log(`Congratulations, ${nameUser}!`);
};

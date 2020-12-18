import readlineSync from 'readline-sync';
import getName from './cli.js';

export default () => {
  const nameUser = getName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const minRange = 1;
  const maxRange = 20;
  const lengthArrayAnswer = 3;
  const numbers = [];
  for (let i = 0; i <= lengthArrayAnswer - 1; i += 1) {
    numbers[i] = Math.ceil(Math.random() * (maxRange - minRange) + minRange);
  }
  for (let i = 0; i <= numbers.length - 1; i += 1) {
    console.log(`Question: ${numbers[i]}`);
    const answer = readlineSync.question('Your answer: ');
    if ((numbers[i] % 2 === 0 && answer === 'yes') || (numbers[i] % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else if ((numbers[i] % 2 === 0 && answer === 'no') || (numbers[i] % 2 !== 0 && answer === 'yes')) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${numbers[i] % 2 === 0 ? 'yes' : 'no'}'.\nLet's try again, ${nameUser}!`);
      return;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no' or 'yes'.\nLet's try again, ${nameUser}!`);
      return;
    }
  }
  console.log(`Congratulations, ${nameUser}!`);
};

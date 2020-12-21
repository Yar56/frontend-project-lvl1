import readlineSync from 'readline-sync';
import engine from '../index.js';

export default () => {
  const nameUser = engine.getName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const numbers = engine.makeRandomArray(1, 20, 3);

  for (let i = 0; i <= numbers.length - 1; i += 1) {
    console.log(`Question: ${numbers[i]}`);
    const answer = readlineSync.question('Your answer: ');

    const wrongAnswer = (wrong = answer, name = nameUser) => {
      const right = numbers[i] % 2 === 0 ? 'yes' : 'no';
      return `'${wrong}' is wrong answer ;(. Correct answer was '${right}'.\nLet's try again, ${name}!`;
    };

    if ((numbers[i] % 2 === 0 && answer === 'yes') || (numbers[i] % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else if ((numbers[i] % 2 === 0 && answer === 'no') || (numbers[i] % 2 !== 0 && answer === 'yes')) {
      console.log(wrongAnswer());
      return;
    } else {
      console.log(wrongAnswer());
      return;
    }
  }
  console.log(`Congratulations, ${nameUser}!`);
};

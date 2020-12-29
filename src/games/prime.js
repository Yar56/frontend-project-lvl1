import readlineSync from 'readline-sync';
import engine from '../index.js';

export default () => {
  const nameUser = engine.getName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const numbers = engine.makeRandomArray(1, 20, 3);

  const isSimple = (num) => {
    let simple = true;
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        simple = false;
        return simple;
      }
    }
    return simple;
  };

  for (let i = 0; i <= numbers.length - 1; i += 1) {
    console.log(`Question: ${numbers[i]}`);
    const answer = readlineSync.question('Your answer: ');
    const checkNumber = isSimple(numbers[i]);
    const wrongAnswer = (wrong = answer, name = nameUser) => {
      const right = checkNumber === true ? 'yes' : 'no';
      return `'${wrong}' is wrong answer ;(. Correct answer was '${right}'.\nLet's try again, ${name}!`;
    };
    if ((checkNumber === true && answer === 'yes') || (checkNumber === false && answer === 'no')) {
      console.log('Correct!');
    } else if ((checkNumber === false && answer === 'yes') || (checkNumber === true && answer === 'no')) {
      console.log(wrongAnswer(answer, nameUser));
      return;
    } else {
      console.log(wrongAnswer(answer, nameUser));
      return;
    }
  }
  console.log(`Congratulations, ${nameUser}!`);
};

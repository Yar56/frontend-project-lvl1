import readlineSync from 'readline-sync';
import engine from '../index.js';

export default () => {
  const nameUser = engine.getName();
  const range = () => {
    const arrayForProgression = [];
    const steps = [2, 3, 5];
    const randomStep = steps[Math.floor(Math.random() * steps.length)];
    const start = randomStep * 2;
    const finish = randomStep === 5 ? 50 : randomStep * 10;
    for (let i = start; i <= finish; i += randomStep) {
      arrayForProgression.unshift(i);
    }
    return arrayForProgression.sort((a, b) => a - b);
  };

  console.log('What number is missing in the progression?');
  for (let i = 1; i <= 3; i += 1) {
    const arr = range();
    const randomSplice = Math.floor(Math.random() * arr.length);
    const numbForAnswer = arr.splice(randomSplice, 1, '..').toString();
    const string = arr.toString().split(',').join(' ');
    console.log(`Question: ${string}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === numbForAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${numbForAnswer}'.\nLet's try again, ${nameUser}!`);
      return;
    }
  }
  console.log(`Congratulations, ${nameUser}!`);
};

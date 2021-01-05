import readlineSync from 'readline-sync';

export default {
  makeRandomArray(min, max, length) {
    const minRange = min;
    const maxRange = max;
    const lengthArrayAnswer = length;
    const numbers = [];
    for (let i = 0; i <= lengthArrayAnswer - 1; i += 1) {
      numbers[i] = Math.ceil(Math.random() * (maxRange - minRange) + minRange);
    }
    return numbers;
  },
  loop(greeting, data, logic, logic2) {
    console.log('Welcome to the Brain Games!');
    const nameUser = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${nameUser}!`);
    console.log(greeting);
    for (let i = 0; i <= data.length - 1; i += 1) {
      console.log(`Question: ${data[i]}`);
      const answer = readlineSync.question('Your answer: ');
      const pred = logic(data);
      const wrongAnswer = () => {
        const right = logic2(data);
        return `'${answer}' is wrong answer ;(. Correct answer was '${right}'.\nLet's try again, ${nameUser}!'`;
      };
      if ((answer === 'yes' && pred[i] === true) || (answer === 'no' && pred[i] === false)) {
        console.log('Correct');
      } else if ((pred[i] === true && answer === 'no') || (pred[i] === false && answer === 'yes')) {
        console.log(wrongAnswer());
        return;
      } else {
        console.log(wrongAnswer());
        return;
      }
    }
    console.log(`Congratulations, ${nameUser}!`);
  },
};

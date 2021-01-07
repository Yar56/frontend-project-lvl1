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
  loop(greeting, data, logicData, logicAnswer) {
    console.log('Welcome to the Brain Games!');
    const nameUser = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${nameUser}!`);
    console.log(greeting);
    for (let i = 0; i <= data.length - 1; i += 1) {
      console.log(`Question: ${data[i]}`);
      const answer = readlineSync.question('Your answer: ');
      const boolValues = logicData(data);
      const wrongAnswer = (number) => {
        const right = logicAnswer(number);
        return `'${answer}' is wrong answer ;(. Correct answer was '${right}'.\nLet's try again, ${nameUser}!'`;
      };
      if ((answer === 'yes' && boolValues[i] === true) || (answer === 'no' && boolValues[i] === false)) {
        // console.log(boolValues[i]);
        console.log('Correct');
      } else if ((boolValues[i] === true && answer === 'no') || (boolValues[i] === false && answer === 'yes')) {
        // console.log(boolValues[i])
        console.log(wrongAnswer(boolValues[i]));
        return;
      } else {
        console.log(wrongAnswer(boolValues[i]));
        return;
      }
    }
    console.log(`Congratulations, ${nameUser}!`);
  },
};

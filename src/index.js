import readlineSync from 'readline-sync';

export default {
  makeRandomNumber(min, max) {
    const minRange = min;
    const maxRange = max;
    return Math.ceil(Math.random() * (maxRange - minRange) + minRange);
  },
  loop(greeting, data, logicData, logicAnswer) {
    console.log('Welcome to the Brain Games!');
    const nameUser = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${nameUser}!`);
    console.log(greeting);
    for (let i = 0; i < 3; i += 1) {
      const dataQuestion = data();
      console.log(`Question: ${dataQuestion}`);
      const answer = readlineSync.question('Your answer: ');
      const boolValues = logicData(dataQuestion);
      const wrongAnswer = () => {
        const right = logicAnswer(dataQuestion);
        return `'${answer}' is wrong answer ;(. Correct answer was '${right}'.\nLet's try again, ${nameUser}!'`;
      };
      if ((answer === 'yes' && boolValues === true) || (answer === 'no' && boolValues === false)) {
        console.log(dataQuestion);
        console.log(boolValues);
        console.log('Correct');
      } else if ((boolValues === true && answer === 'no') || (boolValues === false && answer === 'yes')) {
        console.log(dataQuestion);
        console.log(boolValues);
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

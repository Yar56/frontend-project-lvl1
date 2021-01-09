import readlineSync from 'readline-sync';

export default {
  makeRandomNumber(min, max) {
    const minRange = min;
    const maxRange = max;
    return Math.ceil(Math.random() * (maxRange - minRange) + minRange);
  },
  loop(greeting, data, logicData, responseData) {
    console.log('Welcome to the Brain Games!');
    const nameUser = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${nameUser}!`);
    console.log(greeting);
    for (let i = 0; i < 3; i += 1) {
      const dataQuestion = data();
      console.log(`Question: ${dataQuestion}`);
      const answer = readlineSync.question('Your answer: ');
      const boolValues = logicData(dataQuestion);
      const rightAnswer = responseData(dataQuestion);
      const wrongAnswer = (right) => `'${answer}' is wrong answer ;(. Correct answer was '${right}'.\nLet's try again, ${nameUser}!'`;
      if ((rightAnswer === answer && boolValues === true) || (rightAnswer !== answer && boolValues === false)) {
        console.log(dataQuestion);
        console.log(boolValues);
        console.log('Correct');
      } else if ((!boolValues && rightAnswer === answer) || (boolValues && rightAnswer !== answer)) {
        console.log(dataQuestion);
        console.log(boolValues);
        console.log(wrongAnswer(rightAnswer));
        return;
      } else {
        console.log(wrongAnswer(rightAnswer));
        return;
      }
    }
    console.log(`Congratulations, ${nameUser}!`);
  },
};

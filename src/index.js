import readlineSync from 'readline-sync';

export default {
  makeRandomNumber(min, max) {
    const minRange = min;
    const maxRange = max;
    return Math.ceil(Math.random() * (maxRange - minRange) + minRange);
  },
  loop(greeting, data, responseData) {
    console.log('Welcome to the Brain Games!');
    const nameUser = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${nameUser}!`);
    console.log(greeting);
    const countAnswers = 3;
    for (let i = 0; i < countAnswers; i += 1) {
      const dataQuestion = data();
      console.log(`Question: ${dataQuestion}`);
      const answer = readlineSync.question('Your answer: ');
      const rightAnswer = responseData(dataQuestion);
      const wrongAnswer = (right) => `'${answer}' is wrong answer ;(. Correct answer was '${right}'.\nLet's try again, ${nameUser}!'`;
      if ((rightAnswer === answer)) {
        console.log(dataQuestion);
        console.log(rightAnswer);
        console.log('Correct');
      } else if (rightAnswer !== answer) {
        console.log(dataQuestion);
        console.log(rightAnswer);
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

import readlineSync from 'readline-sync';

export default {
  makeRandomNumber(min, max) {
    const minRange = min;
    const maxRange = max;
    return Math.ceil(Math.random() * (maxRange - minRange) + minRange);
  },
  loop(greeting, logicGame) {
    console.log('Welcome to the Brain Games!');
    const nameUser = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${nameUser}!`);
    console.log(greeting);
    const countAnswers = 3;
    for (let i = 0; i < countAnswers; i += 1) {
      const [data, rightAnswer] = logicGame();
      const answerToStr = rightAnswer.toString();
      console.log(`Question: ${data}`);
      const answer = readlineSync.question('Your answer: ');
      const wrongAnswer = (right) => `'${answer}' is wrong answer ;(. Correct answer was '${right}'.\nLet's try again, ${nameUser}!'`;
      if ((answerToStr === answer)) {
        console.log('Correct');
      } else if (answerToStr !== answer) {
        console.log(wrongAnswer(answerToStr));
        return;
      } else {
        console.log(wrongAnswer(answerToStr));
        return;
      }
    }
    console.log(`Congratulations, ${nameUser}!`);
  },
};

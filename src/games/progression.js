import readlineSync from 'readline-sync';
import engine from '../index.js';

export default () => {
  // длина прогрессии от 5 и до 10 чисел; случайно
  // позицbя спрятанного элемента выбирается случайно на каждом вопросе
  // 2 3 5 это логика прогрессии

  const nameUser = engine.getName();
  // const progression = engine.makeRandomArray(1, 15, 10).sort((a, b) => a - b);

  const range = (from, to, step = 2) => {
    const arrayForProgression = [];
    for (let i = from; i < to; i += step) {
      arrayForProgression.unshift(i);
    }
    return arrayForProgression.sort((a, b) => a - b);
  };
  console.log('What number is missing in the progression?');
  // console.log(progression);
  const showElements = (arr) => {
    const randomSplice = Math.floor(Math.random() * arr.length);
    arr.splice(randomSplice, 1, '..');
    const string = arr.toString().split(',').join(' ');
    return string;
  };
  for (let i = 0; i <= 3 - 1; i += 1) {
    console.log(`Question: ${showElements(range(2, 20, 2))}`);
    const answer = readlineSync.question('Your answer: ');
  }
  // engine.loop(showElement(progression));
};

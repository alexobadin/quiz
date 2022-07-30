const correctAnswers = ['A', 'B', 'C', 'B', 'B', 'B', 'C', 'C'];
const form = document.querySelector('.quiz-form');
let mainText = document.querySelector('.main-text');
const resultSection = document.querySelector('.result-section');
const resultText = document.querySelector('.result-text');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswer = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
    form.q6.value,
    form.q7.value,
    form.q8.value,
  ];
  // check answers

  userAnswer.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 12.5;
    }
    console.log(score);

    resultSection.classList.remove('hide');
    resultText.textContent = `${score}%`;

    // mainText.textContent = `${score}%`;
  });
});

const correctAnswers = ['A', 'B', 'C', 'B', 'B', 'B', 'C', 'C', 'B', 'C'];
const quizColor = document.querySelector('.quiz');
const form = document.querySelector('.quiz-form');
let mainText = document.querySelector('.main-text');
const resultSection = document.querySelector('.result-section');
const resultText = document.querySelector('.result-text');
const conditional = document.querySelector('.conditional ');
const reset = document.querySelector('.reset');

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
    form.q9.value,
    form.q10.value,
  ];
  // check answers

  userAnswer.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 10;
    }
    console.log(score);

    scrollTo(0, 0);
    resultSection.classList.remove('hide');
    console.log(score);

    conditional.classList.add('hide');

    // score animation
    let output = 0;
    const timer = setInterval(() => {
      resultText.textContent = `${output}`;
      if (output === score) {
        if (score < 33) {
          quizColor.classList.add('bg-danger');
          resultText.classList.add('text-danger');
          setTimeout(() => {
            mainText.textContent = 'НЕ ШАРИШ 😒';
            setTimeout(() => {
              mainText.classList.add('hide');
              reset.classList.remove('hide');
            }, 1200);
          }, 1200);
        } else if (score < 66) {
          quizColor.classList.add('bg-warning');
          resultText.classList.add('text-warning');
          reset.classList.add('bg-warning');
          setTimeout(() => {
            mainText.textContent = 'Більш - менш 🤨';
            setTimeout(() => {
              mainText.classList.add('hide');
              reset.classList.remove('hide');
            }, 1200);
          }, 1200);
        } else {
          quizColor.classList.add('bg-success');
          resultText.classList.add('text-success');
          setTimeout(() => {
            mainText.textContent = 'ШАРИШ! 😎';
          }, 1200);
        }
        clearInterval(timer);
      } else {
        output++;
      }
    }, 30);
  });
});

reset.addEventListener('click', () => {
  resultText.classList.remove('text-success');
  mainText.classList.remove('hide');
  reset.classList.add('hide');
  conditional.classList.remove('hide');
  resultSection.classList.add('hide');
  mainText.textContent = `const quiz = 'javaScript`;
  output = 0;
  quizColor.classList.remove('bg-danger', 'bg-warning');
});

if (yourScore <= 33.3) {
  mainText.textContent = 'HE ШАРИШ 😒';
} else if (yourScore <= 66.6) {
  mainText.textContent = 'Більш-менш 🤨';
} else {
  mainText.textContent = 'ШАРИШ! 😎';
}

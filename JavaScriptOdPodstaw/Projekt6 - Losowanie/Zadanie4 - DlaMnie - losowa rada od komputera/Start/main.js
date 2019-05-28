const answers = ["walcz", "przemyś to jeszcze raz"];
const add = document.querySelector('button.add');

// const addAnswer = (e) => {
//   e.preventDefault();
//   const input = document.querySelector('input');
//   const newAnswer = input.value;
//   if (input.value.length) {
//     for (answer of answers) {
//       if (answer === newAnswer) {
//         alert("to już jest!!!!!!");
//         return
//       }
//     }
//     answers.push(newAnswer);
//     div.textContent += newAnswer + ", ";
//     console.log(input.value = "");
//   }
// }

// add.addEventListener('click', addAnswer);

const showAdvice = () => {
  const index = Math.floor(Math.random() * answers.length);
  document.querySelector('h1').textContent = answers[index];
}

const addAnswers = (e) => {
  e.preventDefault();
  const input = document.querySelector('input');
  answers.push(input.value);
  alert(`dodana została opcja ${input.value}`);
  input.value = "";
}

const showAnswers = () => {
  alert(answers.join(" --- --- "))
}

const resetAnswers = (event) => {
  event.preventDefault();
  answers.length = 0;
  document.querySelector('h1').textContent = "";
}

add.addEventListener('click', addAnswers);

document.querySelector('.clean').addEventListener("click", resetAnswers);

document.querySelector('.showAdvice').addEventListener("click", showAdvice);

document.querySelector('.showOptions').addEventListener("click", showAnswers);
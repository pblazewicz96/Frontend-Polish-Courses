let counter = 0;

const spanCounter = document.querySelector("span.counter");

const btnAdd = document.querySelector('button');
const btnMinus = document.querySelector('button.minus');

// document.body.addEventListener("click", function(){
//     counter++;

// })

btnAdd.addEventListener('click', function () {
    counter++;
    // console.log("klik numer: ", spanCounter)
    spanCounter.textContent = counter;
})

btnMinus.addEventListener('click', function () {
    counter = counter - 1;
    // console.log("klik numer: ", spanCounter)
    spanCounter.textContent = counter;
})


// //Potrzebne zmienne
// let counter = 0;

// // Pobieramy potrzebne elementy strony
// const spanCounter = document.querySelector("span.counter");
// const btnAdd = document.querySelector('button');
// const btnMinus = document.querySelector('button:nth-child(2)');

// // Nasłuchiwanie na zdarzenie + określiliśmy akcje w funkcji
// btnAdd.addEventListener("click", function () {
//  // counter = counter + 1;
//  counter++
//  // console.log(counter);
//  spanCounter.textContent = counter;
// })

// btnMinus.addEventListener("click", function () {
//  // counter = counter - 1;
//  counter--
//  // console.log(counter);
//  spanCounter.textContent = counter;
// })